# Architecture Creation Task

## Purpose

- To design a complete, robust, and well-documented technical architecture based on the project requirements (PRD, epics, brief), research findings, and user input.
- To make definitive technology choices and articulate the rationale behind them, leveraging the architecture template as a structural guide.
- To produce all necessary technical artifacts, ensuring the architecture is optimized for efficient implementation, particularly by AI developer agents, and validated against the `architect-checklist`.

## Instructions

1.  **Input Analysis & Dialogue Establishment:**

    - Ensure you have all necessary inputs: PRD document (specifically checking for the 'Technical Assumptions' and 'Initial Architect Prompt' sections for the decided repository and service architecture), project brief, any deep research reports, and optionally a `technical-preferences.md`. Request any missing critical documents.
    - Thoroughly review all inputs.
    - Summarize key technical requirements, constraints, NFRs (Non-Functional Requirements), and the decided repository/service architecture derived from the inputs. Present this summary to the user for confirmation and to ensure mutual understanding.
    - Share initial architectural observations, potential challenges, or areas needing clarification based on the inputs.
      **Establish a dialogue with the user to confirm understanding and refine these initial points.**

2.  **Template & Checklist Confirmation:**

    - Confirm with the user the architecture template to be used (default: `bmad-agent/templates/architecture-tmpl.md`). If a different template is preferred, request its path or content.
    - Confirm the checklist to be used for final validation (default: `bmad-agent/checklists/architect-checklist.md`).
    - Ask for the desired output filename and path for the new architecture document (e.g., `docs/architecture/mvp-architecture.md`). Default to `docs/architecture/mvp-architecture.md` if not specified.

3.  **Iterative Architecture Design (Section by Section):**

    - Follow the structure of the chosen architecture template. For each section:
        a.  **Present Section & Intent:** Clearly state the purpose of the current architectural section based on the template.
        b.  **Elicit Information & Propose Solutions:**
            - Based on the PRD, research, and user dialogue, propose architectural solutions, technology choices, patterns, and component designs relevant to the section.
            - Ask targeted questions to refine proposals and fill information gaps. Example: "For data persistence, considering the NFRs for scalability and the nature of our data (from PRD section X), I propose using [Database Technology A] due to [Rationale A] or [Database Technology B] due to [Rationale B]. Do you have a preference, or further constraints I should consider?"
            - If the PRD's 'Technical Assumptions' or 'Initial Architect Prompt' already dictates a choice (e.g., monolithic vs. microservices, specific cloud provider), acknowledge and build upon it. If it seems contradictory to other requirements, raise this for clarification.
        c.  **Draft Content & Diagrams:**
            - Draft the content for the section, including detailed explanations, justifications for decisions, and trade-offs considered.
            - Where appropriate, describe or generate (using markdown/mermaid.js or by requesting user to create them) necessary diagrams (e.g., C4 context, container, component diagrams, sequence diagrams, deployment diagrams). Ensure diagrams are clearly labeled and referenced in the text.
        d.  **User Review & Refinement:** Present the drafted section (and any diagrams) to the user for review. Incorporate feedback and iterate until approved.
        e.  **Reflective Pause (Optional but Recommended):** Before finalizing a major architectural decision or section, offer the user a 'Reflective Pause' (see technique details from PRD generation task, adapt questions for architectural context).

4.  **Key Architectural Decisions & Artifacts:**

    - **Technology Stack:** Finalize and document the complete technology stack (languages, frameworks, databases, libraries, tools) with justifications for each choice, cross-referencing NFRs and project goals.
    - **System Decomposition:** Define major components, modules, services, and their interactions. Clearly articulate responsibilities and APIs/interfaces.
    - **Data Model & Management:** Design the conceptual/logical data model. Specify data storage solutions, access patterns, and data flow.
    - **Scalability & Performance:** Outline strategies to meet scalability and performance NFRs.
    - **Security Architecture:** Define security measures, authentication/authorization mechanisms, data protection strategies, and compliance considerations.
    - **Deployment Strategy:** Describe the deployment environment(s), CI/CD pipeline considerations, and infrastructure requirements.
    - **Error Handling & Resilience:** Specify patterns for error handling, logging, monitoring, and system resilience.
    - **Integration Points:** Detail integration with external systems or services.
    - **Operational Guidelines (Initial Draft):** Based on architectural decisions, draft initial `docs/operational-guidelines.md` covering coding standards, testing strategy, and other relevant development practices. This will be refined later but starts here.
    - **Project Structure (Initial Draft):** Draft an initial `docs/project-structure.md` outlining the proposed directory layout, key configuration files, and conventions based on the chosen technologies and architecture.

5.  **Generating the "Prompt for PO/Scrum Master" (Story Slicing & Prioritization):**

    - **Purpose:** This section is vital for the Product Owner or Scrum Master to begin breaking down the architecture and PRD epics into manageable, prioritized user stories for development sprints.
    - **Content (to be added to the architecture document or as a separate note):**
        - **Architectural Overview (Key Components for MVP):** Briefly list the core architectural components that need to be built for the MVP, derived from the architecture document.
        - **Suggested Phasing/Sequencing:** Propose a logical sequence or phasing for developing these components, considering dependencies. Example: "Phase 1: Core User Service & Database Setup. Phase 2: Product Catalog Service. Phase 3: Order Processing Workflow."
        - **Key Technical Risks & Mitigation for Early Sprints:** Highlight any technically challenging areas or dependencies that should be addressed early to de-risk the project.
        - **Epic to Component Mapping (Initial Thoughts):** For each major Epic from the PRD, suggest which architectural components are primarily involved. This helps in story slicing.
        - **NFR Hotspots:** Point out specific components or features where NFRs (e.g., high performance, stringent security) will require special attention during story definition and development.
        - **API/Interface Definitions (Pointers):** Refer to sections in the architecture document where key API contracts or interface definitions are detailed, as these will be crucial for story creation.

6.  **Validation & Checklist Review:**

    - **Self-Review:** Before presenting to the user for final approval, conduct a thorough self-review of the entire architecture document against the PRD, project brief, and NFRs.
    - **Checklist Compliance:** Meticulously go through the `architect-checklist.md`. For each item, verify it has been addressed in the architecture document. Create a brief report or section in the architecture document itself, confirming checklist compliance or justifying any deviations.

7.  **Final Review & Approval:**

    - Present the complete architecture document, along with the checklist compliance report, to the user for final review and approval.
    - Address any final feedback or concerns.

8.  **Post-Creation & Handoff:**

    - Inform the user that the architecture document, `docs/operational-guidelines.md` (draft), and `docs/project-structure.md` (draft) have been created/updated and saved.
    - Suggest next steps, typically involving the Product Owner or Scrum Master to use the "Prompt for PO/Scrum Master" section to begin detailed story writing and backlog grooming.
    - Remind the user of the file locations.

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
