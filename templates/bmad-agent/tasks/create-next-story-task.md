# Create Next Story Task

## Purpose

To identify the next logical story based on project progress and epic definitions, and then to prepare a comprehensive, self-contained, and actionable story file using the `Story Template`. This task ensures the story is enriched with all necessary technical context, requirements, and acceptance criteria, making it ready for efficient implementation by a Developer Agent with minimal need for additional research.

## Inputs for this Task

- Access to the project's documentation repository, specifically:
  - `docs/index.md` (hereafter "Index Doc")
  - All Epic files (e.g., `docs/epic-{n}.md` - hereafter "Epic Files")
  - Existing story files in `docs/stories/`
  - Main PRD (hereafter "PRD Doc")
  - Main Architecture Document (hereafter "Main Arch Doc")
  - Frontend Architecture Document (hereafter "Frontend Arch Doc," if relevant)
  - Project Structure Guide (`docs/project-structure.md`)
  - Operational Guidelines Document (`docs/operational-guidelines.md`)
  - Technology Stack Document (`docs/tech-stack.md`)
  - Data Models Document (as referenced in Index Doc)
  - API Reference Document (as referenced in Index Doc)
  - UI/UX Specifications, Style Guides, Component Guides (if relevant, as referenced in Index Doc)
- The `bmad-agent/templates/story-tmpl.md` (hereafter "Story Template")
- The `bmad-agent/checklists/story-creation-checklist.md` (hereafter "Creation Checklist")

## Instructions

### 1. Identify Next Story

- Consult the Index Doc to understand the overall documentation structure and locate relevant epic files.
- Review all Epic Files to understand the defined epics and their constituent stories.
- Scan existing story files in `docs/stories/` to determine which stories have already been created or completed.
- Based on the epics and existing stories, identify the next logical story to be created. Prioritize stories that unblock other work or are foundational.
- Confirm the selected next story with the user if there's ambiguity or multiple candidates.

### 2. Gather Comprehensive Context for the Story

- Once the story is identified (e.g., "Epic 1, Story 3: User Registration"), thoroughly review its description and acceptance criteria within the relevant Epic File.
- **Crucially, cross-reference this story with ALL relevant sections in:**
  - PRD Doc (for business requirements, user personas, overall goals related to this story).
  - Main Arch Doc (for backend components, APIs, data models, services, NFRs impacting this story).
  - Frontend Arch Doc (if it's a UI/frontend story, for relevant components, state management, UI patterns).
  - Operational Guidelines (for coding standards, testing requirements, security considerations applicable).
  - Tech Stack Doc (to understand the specific technologies to be used).
  - Data Models, API References, UI/UX Specs (for detailed technical specifications relevant to the story).
- **Deviation Analysis:** As you gather context, note any discrepancies, ambiguities, or missing information between the story's intent (from Epic) and the detailed context in other documents. These will be highlighted later.

### 3. Enrich and Refine Story Details

- Based on the comprehensive context gathered:
  - **Refine Acceptance Criteria:** Ensure ACs are clear, testable, and fully cover the story's scope as informed by all documents. Add or modify ACs if necessary, ensuring they align with the detailed technical context.
  - **Identify Dependencies:** Note any technical dependencies (e.g., another story must be completed first, a specific API must be available) or informational dependencies (e.g., a design decision is pending).
  - **Clarify Ambiguities:** If ambiguities were found, formulate precise questions to ask the user for clarification before finalizing the story draft.

### 4. Align with Project Structure and Guidelines

- Review the `docs/project-structure.md` and `docs/operational-guidelines.md`.
- For the identified story, determine:
  - Which existing files/modules will be modified?
  - Which new files/modules need to be created?
  - Where should new files be located according to the project structure?
  - Are there specific naming conventions or patterns from the guidelines that apply to this story's implementation?
- This step ensures the story's implementation details will align with defined structures.
- Document any structural conflicts, necessary clarifications, or undefined components/paths in a "Project Structure Notes" section within the story draft.

### 5. Populate Story Template with Full Context

- Create a new story file: `docs/stories/{epicNum}.{storyNum}.story.md`.
- Use the Story Template to structure the file.
- Fill in:
  - Story `{EpicNum}.{StoryNum}: {Short Title Copied from Epic File}`
  - `Status: Draft`
  - `Story` (User Story statement from Epic)
  - `Acceptance Criteria (ACs)` (from Epic, to be refined if needed based on context)
- **`Dev Technical Guidance` section (CRITICAL):**
  - Based on all context gathered (Step 3 & 4), embed concise but critical snippets of information, specific data structures, API endpoint details, precise references to _specific sections_ in other documents (e.g., "See `Data Models Doc#User-Schema-ValidationRules` for details"), or brief explanations of how architectural patterns apply to _this story_.
  - If UI story, provide specific references to Component/Style Guides relevant to _this story's elements_.
  - The aim is to make this section the Dev Agent's primary source for _story-specific_ technical context.
- **`Tasks / Subtasks` section:**
  - Generate a detailed, sequential list of technical tasks and subtasks the Dev Agent must perform to complete the story, informed by the gathered context.
  - Link tasks to ACs where applicable (e.g., `Task 1 (AC: 1, 3)`).
- Add notes on project structure alignment or discrepancies found in Step 4.
- Prepare content for the "Deviation Analysis" based on discrepancies noted in Step 3.
