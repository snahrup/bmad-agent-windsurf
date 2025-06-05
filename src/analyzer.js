const fs = require('fs-extra');
const path = require('path');
const ora = require('ora');
const fg = require('fast-glob'); // For fast globbing to find files

/**
 * Analyzes the project structure and tech stack.
 * @param {string} projectDir - The root directory of the project to analyze.
 * @returns {Promise<Object>} A promise that resolves to an analysis report object.
 */
async function analyzeProject(projectDir) {
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
    // console.log('\nProject Analysis Report:', JSON.stringify(analysisReport, null, 2)); // Optional: log report for debugging
    return analysisReport;
  } catch (error) {
    spinner.fail('Failed to analyze project.');
    console.error('Detailed error:', error);
    // Return a partial or default report instead of throwing, 
    // as analysis failure shouldn't block initialization entirely.
    return analysisReport; 
  }
}

module.exports = {
  analyzeProject,
};