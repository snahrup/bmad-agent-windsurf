# PRD Generate Task

## Purpose

- Transform inputs into core product definition documents conforming to the `prd-tmpl` template.
- Define clear MVP scope focused on essential functionality.
- Provide foundation for Architect and eventually AI dev agents.

Remember as you follow the upcoming instructions:

- Your documents form the foundation for the entire development process.
- Output will be directly used by the Architect to create an architecture document and solution designs to make definitive technical decisions.
- Your epics/stories will ultimately be transformed into development tasks.
- While you focus on the "what" not "how", be precise enough to support a logical sequential order of operations that once later further details can logically be followed where a story will complete what is needed.

## Instructions

### 1. Define Project Workflow Context

- Before PRD generation, ask the user to choose their intended workflow:

  A. **Outcome Focused (Default):** (Agent defines outcome-focused User Stories, leaving detailed technical "how" for Architect/Scrum Master. Capture nuances as "Notes for Architect/Scrum Master in the Prompt for Architect.")

  B. **Very Technical (Not Recommended):** (Agent adopts a "solution-aware" stance, providing more detailed, implementation-aware Acceptance Criteria to bridge to development, potentially with no architect involved at all, instead the PO will create the stories directly from the PRD for the Dev Agent.)

- Based on the user's choice, adapt the level of detail and technical specificity in the generated PRD, particularly in User Stories and Acceptance Criteria sections.

### 2. Initialization & Setup

- **Confirm Template:** Verify with the user that the `prd-tmpl.md` template (located in `bmad-agent/templates/prd-tmpl.md`) is the correct one to use. If not, ask the user to provide the correct template path or content.
- **Output File:** Ask the user for the desired output filename and path for the new PRD (e.g., `docs/prd/my-project-prd.md`). Default to `docs/prd/mvp-prd.md` if not specified.
- **Knowledge Base:** Ask the user if there's an existing knowledge base (e.g., `bmad-kb.md`) or any other relevant documentation to consult. If so, request the path(s).

### 3. Information Gathering (Iterative Section by Section)

- For each section of the `prd-tmpl.md` (e.g., Introduction, Goals, Target Audience, etc.):
    a. **Present Section:** Show the user the current section header and any placeholder text or instructions from the template.
    b. **Elicit Information:** Ask targeted questions to gather the necessary information for that section. Leverage the `bmad-kb.md` or other provided documents if available.
        - *Example Question for "Target Audience":* "Who are the primary users of this product? Can you describe their key characteristics, needs, and pain points?"
    c. **Draft Content:** Based on user input, draft the content for the section.
    d. **User Review & Refinement:** Present the drafted content to the user for review. Incorporate their feedback and iterate until the section is approved.
    e. **Reflective Pause (Optional but Recommended):** Before finalizing a major section (e.g., User Stories, MVP Scope), offer the user a 'Reflective Pause'. See 'Reflective Pause Technique' below.

### 4. Special Handling for Key Sections

- **User Stories / Epics:**
    - Guide the user to define high-level User Stories or Epics. For each:
        - Use the format: "As a [type of user], I want [an action] so that [a benefit/value]."
        - Elicit clear Acceptance Criteria (what must be true for the story to be considered done).
        - If 'Outcome Focused' workflow: Keep ACs high-level, focusing on observable outcomes.
        - If 'Very Technical' workflow: ACs can be more detailed, hinting at specific behaviors or system responses, but still avoid prescribing specific implementation details unless absolutely critical and agreed upon.
    - Number stories sequentially (e.g., US001, US002 or E001, E002).
- **MVP Scope & Exclusions:**
    - Work with the user to clearly define what is IN and OUT of scope for the Minimum Viable Product.
    - Explicitly list features or functionalities that will NOT be included in the MVP.
    - This is critical for managing expectations and focusing development efforts.
- **Success Metrics:**
    - Help the user define measurable Key Performance Indicators (KPIs) or success metrics for the product.
    - How will we know if the product is successful post-launch?
- **Assumptions & Dependencies:**
    - Elicit and document any key assumptions being made.
    - Identify and document any critical dependencies (technical, business, external).

### 5. Generating the "Prompt for Architect"

- **Purpose:** This section is crucial for handing off to the Architect persona. It synthesizes key information from the PRD into a concise prompt.
- **Content (based on `prd-tmpl.md` section):**
    - **Project Goal & Core Problem:** Briefly restate.
    - **Key User Personas/Stories (MVP Focus):** List the most critical ones for the MVP.
    - **Core MVP Features/Functionalities:** Summarize the essential capabilities.
    - **Critical Non-Functional Requirements (NFRs):** Highlight any performance, security, scalability, usability NFRs that significantly impact architectural choices.
    - **Key Constraints & Assumptions:** List those with architectural implications.
    - **Technology Preferences/Constraints (if any from user):** Note any existing tech stack or user-mandated technologies.
    - **Exclusions (Architecturally Relevant):** Mention any major features explicitly out of MVP scope that might otherwise be assumed.
    - **Workflow Choice:** State whether "Outcome Focused" or "Very Technical" workflow was selected by the user, as this informs the Architect's approach to detail.
    - **Notes for Architect/Scrum Master (Outcome Focused Workflow):** If the "Outcome Focused" workflow was chosen, this is where you capture nuances, specific user preferences, or non-obvious business logic details that aren't full requirements but are vital context for the Architect and later the Scrum Master when refining stories. These notes help bridge the gap where outcome-focused stories might lack explicit technical direction.

### 6. Review & Finalization

- **Full PRD Review:** Once all sections are drafted, present the complete PRD to the user for a final review.
- **Consistency Check:** Perform a quick consistency check (e.g., are terms used consistently? Do stories align with goals?).
- **Final Approval:** Obtain user approval for the generated PRD.
- **Save Output:** Save the final PRD to the user-specified output file.

### 7. Post-Generation

- Inform the user that the PRD has been generated and saved.
- Suggest next steps, typically involving the Architect persona to create the architecture document based on this PRD.
- Remind the user of the PRD file location.

## Reflective Pause Technique (Optional)

- **When to Offer:** Before finalizing a major section that involves significant decisions or creative input (e.g., defining core User Stories, MVP scope, key features, UI/UX Concepts).
- **How to Offer:** Say something like: "We've drafted the [Specific Section Name] section. Before we finalize it, would you like to take a 'Reflective Pause'? This involves me asking some probing questions or suggesting alternative perspectives to ensure we've thoroughly considered this area. Or, we can proceed to finalize it now."
- **If User Accepts:**
    - Ask 2-3 targeted questions from the list below, relevant to the section. Tailor them.
    - **Example Probing Questions (select and adapt as needed):**
        - *For User Stories:* "Are there any edge cases or less obvious user scenarios for [specific story] we haven't considered? What if [a typical assumption] isn't true?"
        - *For MVP Scope:* "If we had to cut one more feature from the MVP to meet a tight deadline, which would it be and why? Conversely, if we had a little more capacity, what's the single most impactful small addition?"
        - *For Features:* "What's the biggest risk or potential point of failure for [specific feature]? How might users misunderstand or misuse this feature?"
        - *For Target Audience:* "Is there a secondary audience group that, while not primary, we should still keep in mind for future compatibility or minor adjustments?"
        - *For Success Metrics:* "How will we differentiate between correlation and causation for [specific metric]? What's a counter-metric we should watch to ensure we're not optimizing one thing at the expense of another?"
        - *General:* "What's one assumption we're making about this section that, if wrong, would have the biggest negative impact? What haven't I asked that I should have?"
- **Discuss & Refine:** Discuss the user's responses and refine the section content as needed.

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
