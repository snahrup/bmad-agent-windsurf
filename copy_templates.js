const fs = require('fs-extra');
const path = require('path');

async function copyAgentDirectories() {
  const sourceAgentDir = path.resolve('..', 'bmad-test', 'bmad-agent');
  const targetTemplateDir = path.resolve('.', 'templates', 'bmad-agent');

  const frontendSource = path.join(sourceAgentDir, 'frontend');
  const frontendTarget = path.join(targetTemplateDir, 'frontend');

  const backendSource = path.join(sourceAgentDir, 'backend');
  const backendTarget = path.join(targetTemplateDir, 'backend');

  try {
    console.log(`Copying frontend from ${frontendSource} to ${frontendTarget}...`);
    await fs.copy(frontendSource, frontendTarget, { overwrite: true });
    console.log('Frontend copied successfully.');

    console.log(`Copying backend from ${backendSource} to ${backendTarget}...`);
    await fs.copy(backendSource, backendTarget, { overwrite: true });
    console.log('Backend copied successfully.');

    console.log('All agent directories copied to templates.');
  } catch (err) {
    console.error('Error copying agent directories:', err);
    process.exit(1);
  }
}

copyAgentDirectories();
