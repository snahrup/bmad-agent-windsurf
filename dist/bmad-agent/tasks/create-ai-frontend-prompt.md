# Create AI Frontend Prompt Task

## Purpose

To generate a masterful, comprehensive, and optimized prompt that can be used with AI-driven frontend development tools (e.g., Lovable, Vercel v0, or similar) to scaffold or generate significant portions of the frontend application.

## Inputs

- Completed UI/UX Specification (`front-end-spec-tmpl`)
- Completed Frontend Architecture Document (`front-end-architecture`)
- Main System Architecture Document (`architecture` - for API contracts and tech stack)
- Primary Design Files (Figma, Sketch, etc. - for visual context if the tool can accept it or if descriptions are needed)

## Key Activities & Instructions

1.  **Confirm Target AI Generation Platform:**

    - Ask the user to specify which AI frontend generation tool/platform they intend to use (e.g., "Lovable.ai", "Vercel v0", "GPT-4 with direct code generation instructions", etc.).
    - Explain that prompt optimization might differ slightly based on the platform's capabilities and preferred input format.

2.  **Synthesize Inputs into a Structured Prompt:**

    - **Overall Project Context:**
      - Briefly state the project's purpose (from brief/PRD).
      - Specify the chosen frontend framework, core libraries, and UI component library (from `front-end-architecture` and main `architecture`).
      - Mention the primary design language or theme (e.g., "Material Design inspired," "minimalist," "dark mode primary" - from `front-end-spec`).

    - **Global Styles & Theming:**
      - Key color palette (primary, secondary, accent, error, success colors with hex codes).
      - Main typography choices (font families, base sizes, heading scales).
      - Core layout principles (e.g., "responsive grid system with max width 1200px," "mobile-first approach").

    - **Application Structure & Key Pages/Views:**
      - List the main pages or views to be generated (from `front-end-spec` sitemap or user flows).
      - For each page, describe its primary purpose and key sections/components it should contain.
      - Specify navigation structure (e.g., "top navigation bar with links: Home, About, Contact," "sidebar navigation for dashboard sections").

    - **Reusable Components (from `front-end-spec` and `front-end-architecture` component strategy):**
      - List key reusable components (e.g., Button, Card, Modal, FormInput).
      - For each component, describe its core appearance, variants (e.g., primary button, secondary button), and key interactive states (hover, disabled, active).
      - If specific props are crucial for configurability, mention them (e.g., "Button component should accept a 'variant' prop and an 'onClick' handler").

    - **Specific Page/Component Details (Iterate for each major part):**
      - **Layout:** Describe the layout of the page/component (e.g., "two-column layout, left sidebar 20%, main content 80%"). Reference wireframes or mockups from design files if possible (e.g., "as per 'Dashboard_View_Mockup.png'").
      - **Content Sections:** Detail what each section should display. If there's specific text or placeholder text, include it.
      - **Interactive Elements:** Describe forms, buttons, lists, etc. For forms, list the fields, their types (text, email, password, select), and any validation hints (e.g., "email field must be a valid email format").
      - **Data Display:** How should data be presented (tables, lists, cards)? What are the key data points to show for each item?
      - **Responsiveness:** Specify any critical responsive behaviors for this page/component (e.g., "on mobile, the sidebar should collapse into a hamburger menu").

    - <important_note>It's often better to generate prompts for individual pages or complex components rather than the entire application at once, unless the AI tool is explicitly designed for full-app generation from a single prompt, which is rare. Iterative prompting or focusing on sections/key components is often more effective.</important_note>
    - **State Management (High-Level Pointers):**
      - Mention the chosen state management solution (e.g., "Use Redux Toolkit").
      - For key pieces of data, indicate if they should be managed in global state.
    - **API Integration Points:**
      - For pages/components that fetch or submit data, clearly state the relevant API endpoints (from `architecture`) and the expected data shapes (can reference schemas in `data-models` or `api-reference` sections of the architecture doc).
    - **Critical "Don'ts" or Constraints:**
      - e.g., "Do not use deprecated libraries." "Ensure all forms have basic client-side validation."
    - **Platform-Specific Optimizations:**
      - If the chosen AI tool has known best practices for prompting (e.g., specific keywords, structure, level of detail), incorporate them. (This might require the agent to have some general knowledge or to ask the user if they know any such specific prompt modifiers for their chosen tool).

3.  **Present and Refine the Master Prompt:**
    - Output the generated prompt in a clear, copy-pasteable format (e.g., a large code block).
    - Explain the structure of the prompt and why certain information was included.
    - Work with the user to refine the prompt based on their knowledge of the target AI tool and any specific nuances they want to emphasize.
    - <important_note>Remind the user that the generated code from the AI tool will likely require review, testing, and further refinement by developers.</important_note>
