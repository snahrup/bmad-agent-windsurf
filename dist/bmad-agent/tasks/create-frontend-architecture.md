# Create Frontend Architecture Task

## Purpose

To define the technical architecture for the frontend application. This includes selecting appropriate patterns, structuring the codebase, defining component strategy, planning state management, outlining API interactions, and setting up testing and deployment approaches, all while adhering to the guidelines in `front-end-architecture-tmpl` template.

## Inputs

- Product Requirements Document (PRD) (`prd-tmpl` or equivalent)
- Completed UI/UX Specification (`front-end-spec-tmpl` or equivalent)
- Main System Architecture Document (`architecture` or equivalent) - The agent executing this task should particularly note the overall system structure (Monorepo/Polyrepo, backend service architecture) detailed here, as it influences frontend patterns.
- Primary Design Files (Figma, Sketch, etc., linked from UI/UX Spec)

## Key Activities & Instructions

### 1. Confirm Interaction Mode

- Ask the user: "How would you like to proceed with creating the frontend architecture? We can work:
  A. **Incrementally (Default & Recommended):** We'll go through each architectural decision and document section step-by-step. I'll present drafts, and we'll seek your feedback and confirmation before moving to the next part. This is best for complex decisions and detailed refinement.
  B. **Batch Mode:** I will ask a series of clarifying questions upfront, then generate a full draft of the frontend architecture document based on your answers and the provided inputs. We can then review and iterate on the complete draft.

- Based on the user's choice, adjust the interaction flow.

### 2. Initialization & Setup

- **Confirm Template:** Verify with the user that the `front-end-architecture-tmpl.md` template (located in `bmad-agent/templates/front-end-architecture-tmpl.md`) is the correct one to use. If not, ask for the correct template path or content.
- **Output File:** Ask the user for the desired output filename and path for the new frontend architecture document (e.g., `docs/architecture/frontend-architecture.md`). Default to `docs/architecture/frontend-architecture.md` if not specified.
- **Review Inputs:** Briefly summarize key aspects from the PRD, UI/UX Spec, and Main Architecture doc that will most heavily influence frontend decisions (e.g., target devices, key user flows, API style from main arch, NFRs like performance/accessibility). Confirm this understanding with the user.

### 3. Iterative Design & Documentation (Section by Section, if Incremental Mode)

- Follow the structure of the `front-end-architecture-tmpl.md`. For each section:
    a. **Present Section & Intent:** Explain the purpose of the current section (e.g., "Now, let's define our State Management strategy.").
    b. **Elicit Information & Propose Solutions:** Based on inputs and best practices, propose solutions or ask targeted questions. Example for State Management: "Given the complexity of user interactions in Flow X and Y from the UI/UX spec, and the need for shared data across Z components, I recommend [Redux/Context API/Zustand] because [reasons]. What are your thoughts or any existing preferences?"
    c. **Discuss Trade-offs:** For significant decisions (e.g., framework choice, state management library), briefly discuss alternatives and the trade-offs made.
    d. **Draft Content & Diagrams:** Write the content for the section. If diagrams are needed (e.g., component hierarchy, data flow for state management), describe them in Mermaid syntax or textually.
    e. **User Review & Refinement:** Present the drafted section to the user for review. Incorporate feedback.
    f. **Reflective Pause (Optional):** Before finalizing a major section, offer a 'Reflective Pause' (see technique details from other tasks, adapt questions for frontend architectural context).

### 4. Key Architectural Areas to Address (align with template sections)

- **Overview & Goals:** Briefly reiterate frontend-specific goals from PRD/UI/UX spec.
- **Technology Choices:**
    - **Framework/Libraries:** (e.g., React, Angular, Vue, Svelte, Next.js, Nuxt.js). Justify based on project needs, team skills (if known), performance, ecosystem.
    - **UI Component Library/Design System:** (e.g., Material UI, Ant Design, Tailwind CSS, custom). Align with UI/UX spec and design files.
    - **State Management:** (e.g., Redux, Context API, Zustand, Pinia, Vuex). Justify based on application complexity and data sharing needs.
    - **Routing:** Solution for handling navigation.
    - **API Interaction:** (e.g., Fetch, Axios, GraphQL client like Apollo/Relay). How will the frontend communicate with the backend (REST, GraphQL)?
    - **Testing Frameworks:** (e.g., Jest, Vitest, React Testing Library, Cypress, Playwright) for unit, integration, and E2E tests.
    - **Build Tools & Linters/Formatters:** (e.g., Vite, Webpack, ESLint, Prettier).
- **Codebase Structure & Organization:**
    - Proposed directory structure (e.g., feature-based, atomic design-based).
    - Naming conventions for files, components, variables.
    - Modularity and code-splitting strategies.
- **Component Strategy:**
    - Approach to component design (e.g., Atomic Design, presentational/container components).
    - Reusability, composability, and maintainability of components.
    - Storybook or similar for component development/documentation (if applicable).
- **State Management Architecture:**
    - Detailed plan for managing global, local, and feature-specific state.
    - Data flow patterns.
- **API Integration & Data Handling:**
    - Patterns for fetching, caching, and mutating data.
    - Error handling strategies for API requests.
    - Data transformation and normalization.
- **Authentication & Authorization:**
    - How will frontend handle user authentication (e.g., token storage, session management)?
    - Role-based access control on the frontend (if applicable).
- **Performance Considerations:**
    - Strategies for optimizing load times (e.g., code splitting, lazy loading, image optimization).
    - Rendering performance (e.g., memoization, virtual DOM optimizations).
    - Caching strategies (browser, service worker).
- **Accessibility (A11y):**
    - Plan for ensuring WCAG compliance (or other standards).
    - Tools and practices for accessibility testing.
- **Error Handling & Logging (Frontend):**
    - Global error handling mechanisms.
    - Logging strategy for frontend events and errors (e.g., Sentry, LogRocket).
- **Testing Strategy (Frontend):**
    - Scope of unit, integration, and E2E tests.
    - Code coverage targets (if any).
- **Build & Deployment Process:**
    - Overview of the build process.
    - CI/CD considerations for the frontend.
    - Environment configuration (dev, staging, prod).
- **Internationalization (i18n) & Localization (l10n):** (If applicable)
    - Strategy and tools for supporting multiple languages.

### 5. Create Initial `project-structure.md` and `operational-guidelines.md` (Frontend Focus)

- Based on the decisions made, create or update:
    - `docs/project-structure.md`: Detail the proposed frontend directory layout, key configuration files, and conventions.
    - `docs/operational-guidelines.md`: Add frontend-specific coding standards, testing practices, component design guidelines, state management conventions, etc.
- Inform the user these are initial drafts and can be refined.

### 6. Validation & Checklist

- **Self-Review:** Review the entire frontend architecture document against the PRD, UI/UX Spec, and main architecture for consistency and completeness.
- **Checklist:** If a `frontend-architect-checklist.md` is available, use it for validation. Otherwise, use general best practices.

### 7. Final Review & Approval

- Present the complete frontend architecture document (and drafts of `project-structure.md` and `operational-guidelines.md`) to the user for final review and approval.

### 8. Post-Creation & Handoff

- Inform the user the documents are complete and saved.
- Suggest next steps, such as detailed design of key components or preparing for initial sprint planning based on this architecture.

## Advanced Reflective, Elicitation & Brainstorming Actions (Optional - Offer per section)

- **When to Offer:** After drafting a section, before moving to the next, or when the user seems unsure or wants to explore more deeply.
- **How to Offer:** After presenting the drafted section and before asking for final approval for that section, offer the 'Advanced Reflective, Elicitation & Brainstorming Actions'. Explain that these are optional steps to help ensure quality, explore alternatives, and deepen the understanding of the current section before finalizing it and moving on. The user can select an action by number, or choose to skip this and proceed to finalize the section.

"To ensure the quality of the current section: **[Specific Section Name]** and to ensure its robustness, explore alternatives, and consider all angles, I can perform any of the following actions. Please choose a number (8 to finalize and proceed):

**Advanced Reflective, Elicitation & Brainstorming Actions I Can Take:**

{Instruction for AI Agent: Display the title of each numbered item below. If the user asks what a specific option means, provide a brief explanation of the action you will take, drawing from detailed descriptions tailored for the context.}

1.  **Critical Self-Review & User Goal Alignment**
2.  **Generate & Evaluate Alternative Design Solutions**
3.  **User Journey & Interaction Stress Test (Conceptual)**
4.  **Deep Dive into Design Assumptions & Constraints**
5.  **Usability & Accessibility Audit Review & Probing Questions**
6.  **Collaborative Ideation & UI Feature Brainstorming**
7.  **Elicit 'Unforeseen User Needs' & Future Interaction Questions**
8.  **Finalize this Section and Proceed.**

After I perform the selected action, we can discuss the outcome and decide on any further revisions for this section."

REPEAT by Asking the user if they would like to perform another Reflective, Elicitation & Brainstorming Action UNIT the user indicates it is time to proceed ot the next section (or selects #8)
