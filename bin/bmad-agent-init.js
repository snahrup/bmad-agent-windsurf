#!/usr/bin/env node

const { program } = require('commander');
const init = require('../src/init');
const chalk = require('chalk');
const packageJson = require('../package.json');

program
  .version(packageJson.version)
  .description('BMAD-Agent initialization tool for Windsurf projects')
  .option('-f, --force', 'Force initialization even if bmad-agent directory exists')
  .option('-a, --analyze', 'Analyze project structure after initialization')
  .option('-m, --minimal', 'Create minimal setup (core files only)')
  .option('-v, --verbose', 'Enable verbose logging for debugging')
  .option('-p, --path <path>', 'Specify target project path (defaults to current directory)')
  .action((options) => {
    console.log(chalk.blue.bold('\n🚀 BMAD-Agent Windsurf Initializer'));
    console.log(chalk.blue(`v${packageJson.version}\n`));
    
    init(options)
      .then(() => {
        console.log(chalk.green.bold('\n✅ BMAD-Agent successfully initialized!'));
        console.log(chalk.white('You can now open your project in Windsurf and start using the BMAD-METHOD.'));
        console.log(chalk.white('Use commands like:'));
        console.log(chalk.cyan('  *agents') + chalk.white(' - List available agents'));
        console.log(chalk.cyan('  *party') + chalk.white(' - Start group chat with all agents'));
      })
      .catch((err) => {
        console.error(chalk.red.bold('\n❌ Error during initialization:'));
        console.error(chalk.red(err.message || err));
        process.exit(1);
      });
  });

program.parse(process.argv);