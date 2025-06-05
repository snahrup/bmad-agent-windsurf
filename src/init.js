#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const analyzer = require('./analyzer');
const templateManager = require('./templateManager');

/**
 * Main initialization function
 * @param {Object} options Command line options
 */
async function init(options = {}) {
  // Determine target directory
  const targetDir = options.path || process.cwd();
  
  // Check if target directory exists
  if (!fs.existsSync(targetDir)) {
    throw new Error(`Target directory does not exist: ${targetDir}`);
  }
  
  // Check if bmad-agent already exists
  const bmadAgentDir = path.join(targetDir, 'bmad-agent');
  const windsurfRulesPath = path.join(targetDir, '.windsurfrules');
  
  if (fs.existsSync(bmadAgentDir) && !options.force) {
    const { overwrite } = await inquirer.prompt([{
      type: 'confirm',
      name: 'overwrite',
      message: 'bmad-agent directory already exists. Overwrite?',
      default: false
    }]);
    
    if (!overwrite) {
      throw new Error('Initialization cancelled.');
    }
  }
  
  // Create spinner for visual feedback
  const spinner = ora('Initializing BMAD-Agent...').start();
  
  try {
    // Create directories
    spinner.text = 'Creating directory structure...';
    await createDirectoryStructure(targetDir, options);
    
    // Copy template files
    spinner.text = 'Copying bmad-agent files...';
    await copyTemplateFiles(targetDir, options);
    
    // Create .windsurfrules file
    spinner.text = 'Setting up Windsurf configuration...';
    await createWindsurfRules(targetDir);
    
    // If analyze option is enabled, run code analyzer
    if (options.analyze) {
      spinner.text = 'Analyzing project structure...';
      await analyzer.analyzeProject(targetDir);
    }
    
    spinner.succeed('BMAD-Agent initialization complete!');
  } catch (err) {
    spinner.fail('Initialization failed!');
    throw err;
  }
}

/**
 * Creates the directory structure for bmad-agent
 * @param {string} targetDir Target project directory
 * @param {Object} options Command line options
 */
async function createDirectoryStructure(targetDir, options) {
  const bmadAgentDir = path.join(targetDir, 'bmad-agent');
  const directories = [
    path.join(bmadAgentDir, 'checklists'),
    path.join(bmadAgentDir, 'data'),
    path.join(bmadAgentDir, 'personas'),
    path.join(bmadAgentDir, 'tasks'),
    path.join(bmadAgentDir, 'templates'),
    path.join(bmadAgentDir, 'artifacts'),
    path.join(bmadAgentDir, 'artifacts', 'architecture'),
    path.join(bmadAgentDir, 'artifacts', 'prd'),
    path.join(bmadAgentDir, 'artifacts', 'stories'),
  ];
  
  // If bmad-agent directory already exists, remove it first
  if (fs.existsSync(bmadAgentDir)) {
    await fs.remove(bmadAgentDir);
  }
  
  // Create all directories
  await Promise.all(directories.map(dir => fs.ensureDir(dir)));
}

/**
 * Copies template files to the target directory
 * @param {string} targetDir Target project directory
 * @param {Object} options Command line options
 */
async function copyTemplateFiles(targetDir, options) {
  return templateManager.copyTemplates(targetDir, options);
}

/**
 * Creates or updates the .windsurfrules file
 * @param {string} targetDir Target project directory
 */
async function createWindsurfRules(targetDir) {
  const windsurfRulesPath = path.join(targetDir, '.windsurfrules');
  const windsurfRulesContent = `# Configuration for IDE Agents

## Data Resolution

agent-root: (project-root)/bmad-agent
checklists: (agent-root)/checklists
data: (agent-root)/data
personas: (agent-root)/personas
tasks: (agent-root)/tasks
templates: (agent-root)/templates

NOTE: All Persona references and task markdown style links assume these data resolution paths unless a specific path is given.
Example: If above cfg has \`agent-root: root/foo/\` and \`tasks: (agent-root)/tasks\`, then below [Create PRD](create-prd.md) would resolve to \`root/foo/tasks/create-prd.md\`

## Title: Analyst

- Name: Wendy
- Customize: ""
- Description: "Research assistant, brain storming coach, requirements gathering, project briefs."
- Persona: "analyst.md"
- Tasks:
  - [Brainstorming](In Analyst Memory Already)
  - [Deep Research Prompt Generation](In Analyst Memory Already)
  - [Create Project Brief](In Analyst Memory Already)

## Title: Product Manager (PM)

- Name: Bill
- Customize: ""
- Description: "Jack has only one goal - to produce or maintain the best possible PRD - or discuss the product with you to ideate or plan current or future efforts related to the product."
- Persona: "pm.md"
- Tasks:
  - [Create PRD](create-prd.md)

## Title: Architect

- Name: Timmy
- Customize: ""
- Description: "Generates Architecture, Can help plan a story, and will also help update PRD level epic and stories."
- Persona: "architect.md"
- Tasks:
  - [Create Architecture](create-architecture.md)
  - [Create Next Story](create-next-story-task.md)
  - [Slice Documents](doc-sharding-task.md)

## Title: Design Architect

- Name: Karen
- Customize: ""
- Description: "Help design a website or web application, produce prompts for UI GEneration AI's, and plan a full comprehensive front end architecture."
- Persona: "design-architect.md"
- Tasks:
  - [Create Frontend Architecture](create-frontend-architecture.md)
  - [Create Next Story](create-ai-frontend-prompt.md)
  - [Slice Documents](create-uxui-spec.md)

## Title: Product Owner AKA PO

- Name: Jimmy
- Customize: ""
- Description: "Jack of many trades, from PRD Generation and maintenance to the mid sprint Course Correct. Also able to draft masterful stories for the dev agent."
- Persona: "po.md"
- Tasks:
  - [Create PRD](create-prd.md)
  - [Create Next Story](create-next-story-task.md)
  - [Slice Documents](doc-sharding-task.md)
  - [Correct Course](correct-course.md)

## Title: Frontend Dev

- Name: Rodney
- Customize: "Specialized in NextJS, React, Typescript, HTML, Tailwind"
- Description: "Master Front End Web Application Developer"
- Persona: "dev.ide.md"

## Title: Full Stack Dev

- Name: James
- Customize: ""
- Description: "Master Generalist Expert Senior Senior Full Stack Developer"
- Persona: "dev.ide.md"

## Title: Scrum Master: SM

- Name: Fran
- Customize: ""
- Description: "Specialized in Next Story Generation"
- Persona: "sm.md"
- Tasks:
  - [Draft Story](create-next-story-task.md)
`;
  
  // Write the .windsurfrules file
  await fs.writeFile(windsurfRulesPath, windsurfRulesContent, 'utf8');
}

module.exports = init;