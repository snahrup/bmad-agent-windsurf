# Correct Course Task

## Purpose

- Guide a structured response to a change trigger using the `change-checklist`.
- Analyze the impacts of the change on epics, project artifacts, and the MVP, guided by the checklist's structure.
- Explore potential solutions (e.g., adjust scope, rollback elements, rescope features) as prompted by the checklist.
- Draft specific, actionable proposed updates to any affected project artifacts (e.g., epics, user stories, PRD sections, architecture document sections) based on the analysis.
- Produce a consolidated "Sprint Change Proposal" document that contains the impact analysis and the clearly drafted proposed edits for user review and approval.
- Ensure a clear handoff path if the nature of the changes necessitates fundamental replanning by other core agents (like PM or Architect).

## Instructions

### 1. Initial Setup & Mode Selection

- **Acknowledge Task & Inputs:**
  - Confirm with the user that the "Correct Course Task" (Change Navigation & Integration) is being initiated.
  - Verify the change trigger and ensure you have the user's initial explanation of the issue and its perceived impact.
  - Confirm access to all relevant project artifacts (e.g., PRD, Epics/Stories, Architecture Documents, UI/UX Specifications) and, critically, the `change-checklist` (e.g., `change-checklist`).
- **Establish Interaction Mode:**
  - Ask the user their preferred interaction mode:
    - **A. Guided Checklist Walkthrough (Default & Recommended):** "We will proceed section by section through the `change-checklist`. I'll explain each part, we'll discuss its relevance to the current change, and I'll record your inputs and our conclusions. This is thorough and ensures all angles are covered."
    - **B. Rapid Q&A and Proposal Generation:** "If you prefer a faster approach, you can provide me with your direct answers to the key areas of the `change-checklist` (Issue, Impact, Initial Path, Affected Artifacts). I will then synthesize this into a draft 'Sprint Change Proposal' for your review and iteration."
  - Proceed based on the user's choice.

### 2. Execute Checklist & Analyze Impact (Iterative or Batch)

- **Follow the `change-checklist` structure meticulously.** For each section/item in the checklist:
  - **Explain:** Briefly explain the purpose of the current checklist item/section.
  - **Elicit:** Ask targeted questions related to the change trigger and the checklist item.
  - **Analyze & Record:** Discuss the implications with the user. Synthesize and record the findings, decisions, and rationale directly in relation to the checklist structure. (e.g., "For Checklist Section 2.1 - Impact on PRD: We've identified that feature X.Y needs to be rephrased, and requirement Z.A is no longer valid.")
- **Key Checklist Sections to Emphasize:**
  - **Section 1: Change Identification & Context:** Ensure the change trigger and its source are clearly understood and documented.
  - **Section 2: Impact Assessment:** Systematically review impact on PRD, Epics, Stories, Architecture, UI/UX, Timelines, Resources, and MVP definition.
  - **Section 3: Root Cause (Briefly):** A quick check if the root cause influences the solution.
  - **Section 4: Initial Path Selection:** Guide the user through evaluating options like: Defer, Absorb, Adjust Scope, Rollback, Rescope Feature, Pivot, etc. Document the chosen path and rationale.
  - **Section 5: Affected Artifacts Deep Dive:** For *each* artifact identified in Section 2 as impacted, perform a detailed analysis of *what specifically* needs to change.
  - **Section 6: Solution Exploration (if applicable):** If the chosen path involves creating a new solution or significantly altering an existing one, brainstorm and outline potential solutions.
  - **Section 7: Risk Assessment of Change:** Briefly assess risks associated with implementing the proposed course correction.
  - **Section 8: Communication Plan:** Identify who needs to be informed.

### 3. Draft Specific Proposed Edits for Artifacts

- This is a CRITICAL step. Based on the detailed analysis in "Section 5: Affected Artifacts Deep Dive" of the checklist:
  - For **each** affected project document (PRD, specific Epic, specific User Story, Architecture doc section, etc.):
    - **Isolate the original text** that needs changing.
    - **Draft the precise, new text** that should replace or be added to the original.
    - **Clearly indicate where these changes should occur** (e.g., "In PRD, Section 3.2, replace paragraph 2 with the following:", "In Epic-001, User Story 3, modify Acceptance Criteria 2 to read:").
  - These drafted edits will form the core of the "Sprint Change Proposal."
  - <important_note>Do NOT just say "update the PRD." You must draft the *actual text* of the proposed updates.</important_note>

### 4. Consolidate into "Sprint Change Proposal"

- Create a new markdown document titled "Sprint Change Proposal - [Date] - [Brief Change Description]".
- This document should include:
  - **1. Change Overview:** Briefly restate the change trigger and the agreed-upon path from the checklist (Section 1 & 4 of checklist).
  - **2. Summary of Impact Analysis:** Briefly summarize the key findings from the checklist's impact assessment (Section 2 & 5 of checklist).
  - **3. Proposed Artifact Changes (Actionable Edits):**
    - For each affected artifact, present the drafted edits as prepared in Step 3. Use clear headings for each artifact (e.g., "Proposed Changes to PRD.md", "Proposed Changes to docs/epics/epic-002.md").
    - Show the original relevant snippet (if concise and helpful for context) and then the proposed new/modified snippet.
  - **4. Next Steps Recommendation:** Briefly state the recommended next steps (e.g., "Seek final approval for these changes. Upon approval, update the respective project documents and backlog items.").
- Present this consolidated "Sprint Change Proposal" document to the user for review. Iterate on the proposal based on user feedback. Ensure the drafted edits are clear, accurate, and directly address the outcomes of the checklist analysis.
- Incorporate any final adjustments requested by the user.

### 5. Finalize & Determine Next Steps

- Obtain explicit user approval for the "Sprint Change Proposal," including all the specific edits documented within it.
- Provide the finalized "Sprint Change Proposal" document to the user.
- **Based on the nature of the approved changes:**
  - **If the approved edits sufficiently address the change and can be implemented directly or organized by a PO/SM:** State that the "Correct Course Task" is complete regarding analysis and change proposal, and the user can now proceed with implementing or logging these changes (e.g., updating actual project documents, backlog items). Suggest handoff to a PO/SM agent for backlog organization if appropriate.
  - **If the analysis and proposed path (as per checklist Section 4 and potentially Section 6) indicate that the change requires a more fundamental replan (e.g., significant scope change, major architectural rework):** Clearly state this conclusion. Advise the user that the next step involves engaging the primary PM or Architect agents, using the "Sprint Change Proposal" as critical input and context for that deeper replanning effort.

## Output Deliverables

- **Primary:** A "Sprint Change Proposal" document (in markdown format). This document will contain:
  - A summary of the `change-checklist` analysis (issue, impact, rationale for the chosen path).
  - Specific, clearly drafted proposed edits for all affected project artifacts.
- **Implicit:** An annotated `change-checklist` (or the record of its completion) reflecting the discussions, findings, and decisions made during the process.
