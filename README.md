# BMAD-Agent for Windsurf

> Effortless initialization of BMAD-METHOD in Windsurf projects

[![npm version](https://img.shields.io/npm/v/bmad-agent-init.svg)](https://www.npmjs.com/package/bmad-agent-init)
[![CI](https://github.com/snahrup/bmad-agent-windsurf/actions/workflows/ci.yml/badge.svg)](https://github.com/snahrup/bmad-agent-windsurf/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

## Overview

BMAD-Agent Windsurf is an initialization tool that streamlines the setup of the BMAD-METHOD framework in Windsurf projects. By automating the process of copying, configuring, and integrating the bmad-agent files, this tool eliminates the need for manual copy-pasting between projects.

### What is BMAD-METHOD?

BMAD-METHOD is a framework for AI-assisted software development that defines a structured approach for AI agents to collaborate in building software. It features specialized personas (Analyst, Architect, Product Manager, etc.) that work together through defined tasks and workflows.

## Installation

To use the BMAD Agent Windsurf initializer, simply run:

```bash
npx bmad-agent-init
```

Or install it globally:

```bash
npm install -g bmad-agent-init
bmad-agent-init
```

## Requirements

- **Node.js**: Version 18.0.0 or higher

## Features

- **One-Command Setup**: Initialize bmad-agent in any project with a single command
- **Minimal Mode**: Create a lightweight setup with only essential files (`--minimal`)
- **Project Analysis**: Analyze your project structure and generate a detailed report (`--analyze`)
- **Intelligent Detection**: Analyzes your codebase to understand your tech stack
- **Verbose Logging**: Enable detailed debug output with `--verbose`
- **Windsurf Integration**: Works seamlessly with Windsurf for AI-assisted development
- **Complete File Structure**: Sets up all necessary directories, configuration files, and templates

## Usage

Run without installation in any project:

```bash
npx bmad-agent-init@latest
```

### Global Installation

```bash
npm install -g bmad-agent-init
bmad-agent-init
```

### Command Options

- `-f, --force` - Force initialization even if bmad-agent directory exists
- `-a, --analyze` - Analyze project structure and generate a report
- `-m, --minimal` - Create minimal setup (core files only)
- `-v, --verbose` - Enable verbose logging for debugging
- `-p, --path <path>` - Specify target project path (defaults to current directory)

**Examples:**

```bash
# Initialize with minimal setup
npx bmad-agent-init --minimal

# Analyze project and generate report
npx bmad-agent-init --analyze

# Initialize in specific directory with analysis
npx bmad-agent-init --path ./my-project --analyze

# Force re-initialization with verbose output
npx bmad-agent-init --force --verbose
```

## What Gets Installed

Running the initializer sets up the following structure in your project:

```
your-project/
├── .windsurfrules                      # Windsurf configuration
├── bmad-agent/                         # Core bmad-agent directory
│   ├── checklists/                     # Project checklists
│   ├── data/                           # Knowledge base and data files
│   │   └── bmad-kb.md                  # BMAD knowledge base
│   ├── personas/                       # Agent personas
│   │   ├── analyst.md
│   │   ├── architect.md
│   │   ├── design-architect.md
│   │   ├── dev.ide.md
│   │   ├── pm.md
│   │   ├── po.md
│   │   └── sm.md
│   ├── tasks/                          # Task definitions
│   │   ├── create-architecture.md
│   │   ├── create-next-story-task.md
│   │   ├── create-prd.md
│   │   └── (other task files)
│   ├── templates/                      # File templates
│   ├── artifacts/                      # Project-specific outputs
│   │   ├── architecture/               # Architecture documents
│   │   ├── prd/                        # Product requirements
│   │   └── stories/                    # User stories
│   ├── ide-bmad-orchestrator.cfg.md    # Configuration for orchestrator
│   └── ide-bmad-orchestrator.md        # Orchestrator definition
```

## How It Works

1. **Installation**: The tool is installed via npm or run directly with npx
2. **Project Analysis**: Scans your project to understand its structure and tech stack
3. **Template Application**: Copies the bmad-agent files from templates
4. **Configuration**: Sets up `.windsurfrules` with proper paths
5. **Verification**: Ensures all required files are properly installed
6. **Integration**: Links the bmad-agent with your Windsurf environment

## Minimal Mode

When using the `--minimal` flag, only essential files are copied:

- Core configuration files
- One default persona (`dev.ide.md`)
- Essential checklists and tasks
- Key templates

This is perfect for:
- Lightweight projects
- Quick prototyping
- Learning the BMAD-METHOD
- Projects with limited scope

## Project Analysis

The `--analyze` flag generates a comprehensive project analysis report:

```bash
npx bmad-agent-init --analyze
```

The report includes:
- Detected tech stack (React, Node.js, TypeScript, etc.)
- Project structure overview
- Potential entry points
- Git repository status

The report is saved to: `bmad-agent/reports/analysis-report.md`

## Using with Windsurf

After initializing the bmad-agent in your project:

1. Open your project in Windsurf
2. The bmad-agent will be automatically detected
3. Interact with the agent using commands like:
   - `*agents` - List available agents
   - `*party` - Start group chat with all agents
   - Or address agents directly: "Bill, can you create a PRD for this project?"

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

Quick start for contributors:
1. Node 18+
2. `npm ci`
3. `npm run build`
4. `npm test`
5. `npm run lint` and `npm run format` before commits

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [BMAD-METHOD](https://github.com/bmad-method/BMAD-METHOD) - The original framework upon which this tool is based
- The Windsurf community for their support and feedback