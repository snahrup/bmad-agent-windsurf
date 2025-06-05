# BMAD-Agent for Windsurf

> Effortless initialization of BMAD-METHOD in Windsurf projects

[![NPM Version](https://img.shields.io/badge/npm-1.0.0-blue)](https://www.npmjs.com/package/bmad-agent-init)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

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

## Features

- **One-Command Setup**: Initialize bmad-agent in any project with a single command
- **Intelligent Detection**: Analyzes your codebase to understand your tech stack
- **Project-Specific Configuration**: Creates a tailored setup for your specific project
- **Windsurf Integration**: Works seamlessly with Windsurf for AI-assisted development
- **Complete File Structure**: Sets up all necessary directories, configuration files, and templates


Run without installation in any project:

```bash
npx bmad-agent-init@latest
```

### Global Installation

```bash
npm install -g bmad-agent-windsurf
bmad-agent-init
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

## Using with Windsurf

After initializing the bmad-agent in your project:

1. Open your project in Windsurf
2. The bmad-agent will be automatically detected
3. Interact with the agent using commands like:
   - `*agents` - List available agents
   - `*party` - Start group chat with all agents
   - Or address agents directly: "Bill, can you create a PRD for this project?"

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [BMAD-METHOD](https://github.com/bmad-method/BMAD-METHOD) - The original framework upon which this tool is based
- The Windsurf community for their support and feedback