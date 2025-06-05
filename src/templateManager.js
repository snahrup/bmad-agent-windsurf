const fs = require('fs-extra');
const path = require('path');
const ora = require('ora');

/**
 * Copies template files to the target directory.
 * @param {string} targetDir - The root directory of the user's project.
 * @param {Object} options - Command line options (e.g., minimal setup).
 */
async function copyTemplates(targetDir, options) {
  console.log('[templateManager] Starting copyTemplates...');
  console.log(`[templateManager] targetDir: ${targetDir}`);
  const spinner = ora('Copying bmad-agent template files...').start();
  
  // Define the source of the templates within this package
  // When packaged, these files will be relative to the execution path of the package
  const templateSourceDir = path.resolve(__dirname, '..', 'templates', 'bmad-agent');
  console.log(`[templateManager] __dirname: ${__dirname}`);
  console.log(`[templateManager] Resolved templateSourceDir: ${templateSourceDir}`);
  const targetBmadAgentDir = path.join(targetDir, 'bmad-agent');

  try {
    // Ensure the source template directory exists (important for local dev and packaging)
    if (!fs.existsSync(templateSourceDir)) {
      console.error(`[templateManager] CRITICAL: Template source directory NOT FOUND at ${templateSourceDir}`);
      spinner.fail('Template source directory not found. This is an internal error.');
      throw new Error(`Template source directory missing at ${templateSourceDir}. Please report this issue.`);
    }

    // Copy the entire bmad-agent template directory
    // fs-extra's copySync will overwrite if files exist, which is handled by the force flag in init.js
    console.log(`[templateManager] Attempting to copy from ${templateSourceDir} to ${targetBmadAgentDir}`);
    await fs.copy(templateSourceDir, targetBmadAgentDir);
    console.log('[templateManager] fs.copy completed.');

    // TODO: Implement minimal setup if options.minimal is true
    // This would involve selectively copying only essential files/directories
    if (options.minimal) {
      spinner.info('Minimal setup selected. (Note: Minimal copy logic not yet fully implemented).');
      // Example: Remove non-essential directories or files after full copy, or copy selectively.
    }

    spinner.succeed('Template files copied successfully.');
    console.log('[templateManager] copyTemplates finished successfully.');
  } catch (error) {
    spinner.fail('Failed to copy template files.');
    console.error('Detailed error:', error);
    console.error('[templateManager] Error in copyTemplates:', error);
    throw error;
  }
}

module.exports = {
  copyTemplates,
};