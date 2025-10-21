const fs = require('fs-extra');
const path = require('path');
const ora = require('ora');
const fg = require('fast-glob'); // For fast globbing to find files

/**
 * Formats the analysis report as Markdown
 * @param {Object} report - Analysis report object
 * @returns {string} Markdown formatted report
 */
function formatReportAsMarkdown(report) {
  let md = '# BMAD Project Analysis Report\n\n';
  md += `**Generated:** ${new Date().toISOString()}\n\n`;

  md += '## Tech Stack\n\n';
  if (report.techStack.length > 0) {
    md += report.techStack.map((tech) => `- ${tech}`).join('\n') + '\n';
  } else {
    md += '_No tech stack detected_\n';
  }

  md += '\n## Project Structure\n\n';
  if (report.projectStructure.topLevel && report.projectStructure.topLevel.length > 0) {
    md += '**Top-level directories and files:**\n\n';
    md += report.projectStructure.topLevel.map((item) => `- ${item}`).join('\n') + '\n';
  } else {
    md += '_No project structure detected_\n';
  }

  md += '\n## Potential Entry Points\n\n';
  if (report.potentialEntryPoints.length > 0) {
    md += report.potentialEntryPoints.map((entry) => `- ${entry}`).join('\n') + '\n';
  } else {
    md += '_No entry points detected_\n';
  }

  md += '\n## Version Control\n\n';
  md += report.hasGit ? '- Git repository: Yes\n' : '- Git repository: No\n';

  return md;
}

/**
 * Writes the analysis report to a file
 * @param {Object} report - Analysis report object
 * @param {string} projectDir - Project directory
 * @param {Object} options - Options (verbose)
 * @returns {Promise<string>} Path to the written report file
 */
async function outputAnalysis(report, projectDir, options = {}) {
  const outDir = path.join(projectDir, 'bmad-agent', 'reports');
  await fs.ensureDir(outDir);
  const outFile = path.join(outDir, 'analysis-report.md');
  const markdown = formatReportAsMarkdown(report);
  await fs.writeFile(outFile, markdown, 'utf8');

  if (options.verbose) {
    console.log(`[analyzer] Analysis report written to: ${outFile}`);
  }

  return outFile;
}

/**
 * Analyzes the project structure and tech stack.
 * @param {string} projectDir - The root directory of the project to analyze.
 * @param {Object} options - Options (verbose)
 * @returns {Promise<Object>} A promise that resolves to an analysis report object.
 */
async function analyzeProject(projectDir, options = {}) {
  const spinner = ora('Analyzing project structure and tech stack...').start();
  const analysisReport = {
    techStack: [],
    projectStructure: {},
    potentialEntryPoints: [],
    hasGit: false,
  };

  try {
    // Check for package.json to identify Node.js projects and dependencies
    const packageJsonPath = path.join(projectDir, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = await fs.readJson(packageJsonPath);
      analysisReport.techStack.push('Node.js');
      if (packageJson.dependencies) {
        if (packageJson.dependencies.react) analysisReport.techStack.push('React');
        if (packageJson.dependencies.next) analysisReport.techStack.push('Next.js');
        if (packageJson.dependencies.vue) analysisReport.techStack.push('Vue.js');
        if (packageJson.dependencies.angular) analysisReport.techStack.push('Angular');
        if (packageJson.dependencies.typescript) analysisReport.techStack.push('TypeScript');
      }
      if (packageJson.devDependencies) {
        if (packageJson.devDependencies.typescript && !analysisReport.techStack.includes('TypeScript')) {
          analysisReport.techStack.push('TypeScript');
        }
      }
    }

    // Check for Python specific files
    const requirementsTxtPath = path.join(projectDir, 'requirements.txt');
    const setupPyPath = path.join(projectDir, 'setup.py');
    if (fs.existsSync(requirementsTxtPath) || fs.existsSync(setupPyPath)) {
      analysisReport.techStack.push('Python');
      // TODO: Could parse requirements.txt for common Python frameworks like Django, Flask
    }

    // Check for .git directory
    const gitPath = path.join(projectDir, '.git');
    if (fs.existsSync(gitPath)) {
      analysisReport.hasGit = true;
    }

    // Basic project structure (list top-level files and directories)
    const topLevelEntries = await fs.readdir(projectDir);
    analysisReport.projectStructure.topLevel = topLevelEntries.filter(entry => entry !== '.git' && entry !== 'node_modules' && entry !== '.bmad'); // Exclude common large/irrelevant dirs

    // Find potential entry points (common ones)
    const commonEntryPoints = await fg([
      'src/index.js', 'src/main.js', 'src/app.js',
      'src/index.ts', 'src/main.ts', 'src/app.ts',
      'app/main.py', 'manage.py', 'main.py'
    ], { cwd: projectDir, caseSensitiveMatch: false, deep: 3 });
    analysisReport.potentialEntryPoints = commonEntryPoints;

    spinner.succeed('Project analysis complete.');

    // Write report to file
    const reportPath = await outputAnalysis(analysisReport, projectDir, options);
    const relPath = path.relative(process.cwd(), reportPath);

    // Display summary to console
    console.log('\n=== Project Analysis Summary ===\n');
    console.log('Tech Stack:', analysisReport.techStack.join(', ') || 'None detected');
    console.log('Git Repository:', analysisReport.hasGit ? 'Yes' : 'No');
    console.log('Entry Points Found:', analysisReport.potentialEntryPoints.length);
    console.log(`\nFull report: ${relPath}\n`);

    return analysisReport;
  } catch (error) {
    spinner.fail('Failed to analyze project.');
    if (options.verbose) {
      console.error('Detailed error:', error);
    }
    // Return a partial or default report instead of throwing,
    // as analysis failure shouldn't block initialization entirely.
    return analysisReport;
  }
}

module.exports = {
  analyzeProject,
  outputAnalysis,
  formatReportAsMarkdown,
};