# Create UI/UX Specification Task

## Purpose

To collaboratively work with the user to define and document the User Interface (UI) and User Experience (UX) specifications for the project. This involves understanding user needs, defining information architecture, outlining user flows, and ensuring a solid foundation for visual design and frontend development. The output will populate a new document called `front-end-spec.md` following the `front-end-spec-tmpl` template.

## Inputs

- Project Brief (`project-brief.md` or equivalent)
- Product Requirements Document (PRD) (`prd.md` or equivalent)
- User feedback or research (if available)

## Key Activities & Instructions

### 1. Understand Core Requirements

- Review Project Brief and PRD to grasp project goals, target audience, key features, and any existing constraints.
- Ask clarifying questions about user needs, pain points, and desired outcomes.

### 2. Define Overall UX Goals & Principles (for `front-end-spec-tmpl`)

- Collaboratively establish and document:
  - Target User Personas (elicit details or confirm existing ones).
  - Key Usability Goals.
  - Core Design Principles for the project.

### 3. Develop Information Architecture (IA) (for `front-end-spec-tmpl`)

- Work with the user to create a Site Map or Screen Inventory.
- Define the primary and secondary Navigation Structure.
- Use Mermaid diagrams for visualization where appropriate.

### 4. Outline Key User Flows (for `front-end-spec-tmpl`)

- Identify and document critical User Flows (e.g., registration, core task completion).
- For each flow, list the steps and corresponding screens/views.
- Use Mermaid diagrams (e.g., flowcharts) to illustrate these flows.

### 5. Detail Wireframes & Layouts (Conceptual or Reference to Design Files) (for `front-end-spec-tmpl`)

- For key screens/views identified in user flows and sitemap:
  - Discuss and document the general layout and placement of UI elements (e.g., header, footer, main content area, sidebars).
  - Describe key interactive elements (buttons, forms, navigation items).
  - If detailed design files (Figma, Sketch) exist or will be created, specify that this section will reference those files rather than recreate detailed wireframes in text. Ask for links to these design files.
  - If no separate design files, work with the user to describe the wireframes textually or using simple Mermaid diagrams if feasible.

### 6. Specify UI Components & Patterns (for `front-end-spec-tmpl`)

- Identify common UI components that will be used throughout the application (e.g., buttons, forms, modals, cards, tables).
- Describe their basic appearance, behavior, and any key variations.
- Discuss any established UI patterns to be followed (e.g., specific form validation display, notification style).

### 7. Address Accessibility (A11y) Considerations (for `front-end-spec-tmpl`)

- Discuss and document initial accessibility requirements (e.g., WCAG level to target).
- Note considerations for keyboard navigation, screen reader compatibility, color contrast, etc.

### 8. Content Strategy (High-Level) (for `front-end-spec-tmpl`)

- Briefly discuss the tone of voice, terminology, and any guidelines for in-app text.
- Identify needs for placeholder content, error messages, and success notifications.

### 9. Interaction Design Notes (for `front-end-spec-tmpl`)

- Document any specific animations, transitions, or micro-interactions envisioned, if critical to the UX.

### 10. Iterative Review & Refinement

- After drafting each major section of the `front-end-spec.md` (based on `front-end-spec-tmpl`), present it to the user for review and feedback.
- Incorporate revisions collaboratively.
- Use the "Advanced Reflective, Elicitation & Brainstorming Actions" (see below) as needed to deepen understanding or explore alternatives for specific sections.

### 11. Finalization

- Once all sections are complete and reviewed, compile the final `front-end-spec.md` document.
- Confirm with the user that it accurately reflects their vision and requirements for the UI/UX.

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
