const fs = require('fs-extra');
const path = require('path');
const ora = require('ora');
const fg = require('fast-glob');

/**
 * Files and directories to include in minimal mode
 */
const MINIMAL_ALLOWLIST = [
  // Core config
  'ide-bmad-orchestrator.cfg.md',
  'ide-bmad-orchestrator.md',
  // At least one persona
  'personas/dev.ide.md',
  // At least one checklist
  'checklists/story-draft-checklist.md',
  // Essential data
  'data/bmad-kb.md',
  // Core tasks
  'tasks/create-prd.md',
  'tasks/create-architecture.md',
  'tasks/create-next-story-task.md',
  // Essential templates
  'templates/story-tmpl.md',
];

/**
 * Check if a file path is allowed in minimal mode
 * @param {string} relPath - Relative path from template root
 * @returns {boolean}
 */
function isAllowedMinimal(relPath) {
  return MINIMAL_ALLOWLIST.some((allowed) => {
    // Normalize paths for comparison
    const normalizedAllowed = allowed.replace(/\\/g, '/');
    const normalizedRel = relPath.replace(/\\/g, '/');
    return (
      normalizedRel === normalizedAllowed ||
      normalizedRel.startsWith(`${normalizedAllowed.replace(/\/$/, '')}/`)
    );
  });
}

/**
 * Copies template files to the target directory.
 * @param {string} targetDir - The root directory of the user's project.
 * @param {Object} options - Command line options (e.g., minimal setup, verbose).
 */
async function copyTemplates(targetDir, options = {}) {
  if (options.verbose) {
    console.log('[templateManager] Starting copyTemplates...');
    console.log(`[templateManager] targetDir: ${targetDir}`);
  }

  const spinnerText = options.minimal
    ? 'Copying minimal bmad-agent template files...'
    : 'Copying bmad-agent template files...';
  const spinner = ora(spinnerText).start();

  // Define the source of the templates within this package
  const templateSourceDir = path.resolve(__dirname, '..', 'templates', 'bmad-agent');
  const targetBmadAgentDir = path.join(targetDir, 'bmad-agent');

  if (options.verbose) {
    console.log(`[templateManager] __dirname: ${__dirname}`);
    console.log(`[templateManager] Resolved templateSourceDir: ${templateSourceDir}`);
  }

  try {
    // Ensure the source template directory exists
    if (!fs.existsSync(templateSourceDir)) {
      if (options.verbose) {
        console.error(`[templateManager] Template source directory NOT FOUND at ${templateSourceDir}`);
      }
      spinner.fail('Template source directory not found. This is an internal error.');
      throw new Error(
        `Template source directory missing at ${templateSourceDir}. Please report this issue.`
      );
    }

    if (options.minimal) {
      // Minimal mode: copy only allowlisted files
      if (options.verbose) {
        console.log('[templateManager] Minimal mode enabled, filtering files...');
      }

      const entries = await fg(['**/*'], {
        cwd: templateSourceDir,
        dot: true,
        onlyFiles: true,
        ignore: ['**/node_modules/**'],
      });

      if (options.verbose) {
        console.log(`[templateManager] Found ${entries.length} total files, filtering...`);
      }

      const allowedFiles = entries.filter(isAllowedMinimal);

      if (options.verbose) {
        console.log(`[templateManager] Copying ${allowedFiles.length} minimal files...`);
      }

      await Promise.all(
        allowedFiles.map(async (rel) => {
          const src = path.join(templateSourceDir, rel);
          const dst = path.join(targetBmadAgentDir, rel);
          await fs.ensureDir(path.dirname(dst));
          await fs.copy(src, dst);
        })
      );

      spinner.succeed(`Minimal template files copied (${allowedFiles.length} files).`);
    } else {
      // Full mode: copy entire directory, excluding node_modules
      if (options.verbose) {
        console.log('[templateManager] Full mode, copying all files...');
      }

      await fs.copy(templateSourceDir, targetBmadAgentDir, {
        filter: (src) => {
          // Exclude node_modules directories
          return !src.includes('node_modules');
        },
      });

      spinner.succeed('Template files copied successfully.');
    }

    if (options.verbose) {
      console.log('[templateManager] copyTemplates finished successfully.');
    }
  } catch (error) {
    spinner.fail('Failed to copy template files.');
    if (options.verbose) {
      console.error('Detailed error:', error);
    }
    throw error;
  }
}

module.exports = {
  copyTemplates,
};