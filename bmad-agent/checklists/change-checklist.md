# Change Navigation Checklist

**Purpose:** To systematically guide the selected Agent and user through the analysis and planning required when a significant change (pivot, tech issue, missing requirement, failed story) is identified during the BMAD workflow.

**Instructions:** Review each item with the user. Mark `[x]` for completed/confirmed, `[N/A]` if not applicable, or add notes for discussion points.

---

## 1. Understand the Trigger & Context

- [ ] **Identify Triggering Story:** Clearly identify the story (or stories) that revealed the issue.
- [ ] **Define the Issue:** Articulate the core problem precisely.
  - [ ] Is it a technical limitation/dead-end?
  - [ ] Is it a newly discovered requirement?
  - [ ] Is it a fundamental misunderstanding of existing requirements?
  - [ ] Is it a necessary pivot based on feedback or new information?
  - [ ] Is it a failed/abandoned story needing a new approach?
- [ ] **Assess Initial Impact:** Describe the immediate observed consequences (e.g., blocked progress, incorrect functionality, non-viable tech).
- [ ] **Gather Evidence:** Note any specific logs, error messages, user feedback, or analysis that supports the issue definition.

## 2. Epic Impact Assessment

- [ ] **Analyze Current Epic:**
  - [ ] Can the current epic containing the trigger story still be completed?
  - [ ] Does the current epic's goal need to change?
  - [ ] Do other stories within this epic need modification or removal?
  - [ ] Are new stories required for this epic?
- [ ] **Analyze Dependent Epics:**
  - [ ] Are other epics dependent on the current epic's original outcome?
  - [ ] How does the change affect their goals or feasibility?
  - [ ] Do stories in dependent epics need modification?
- [ ] **Analyze Overall Epic Roadmap:**
  - [ ] Does the change impact the sequence or priority of other epics?
  - [ ] Are any epics now obsolete or newly critical?

## 3. Project Artifact Impact Assessment

- [ ] **PRD (Product Requirements Document):**
  - [ ] Does the change conflict with stated requirements?
  - [ ] Do any PRD sections need updating (features, user stories, NFRs)?
  - [ ] Does the overall product vision or MVP definition in the PRD need review?
- [ ] **Architecture Document(s) (Main, Frontend, etc.):**
  - [ ] Does the change invalidate architectural decisions?
  - [ ] Are new components/services needed, or existing ones modified?
  - [ ] Does the tech stack need adjustment?
  - [ ] Are there impacts on data models or API contracts?
- [ ] **UI/UX Specification & Design Files:**
  - [ ] Do user flows need to be redesigned?
  - [ ] Are new screens or UI components required?
  - [ ] Do existing designs conflict with the new direction?
- [ ] **Project Plan / Roadmap (if separate):**
  - [ ] How does the change affect timelines and milestones?
  - [ ] Are resource allocations still appropriate?
- [ ] **Test Plans / QA Strategy:**
  - [ ] Do existing test cases need to be updated or discarded?
  - [ ] Are new test scenarios required?

## 4. Path Forward Exploration & Decision

- [ ] **Option 1: Direct Adjustment & Continuation:**
  - [ ] Can the issue be resolved with minor story adjustments within the current epic?
  - [ ] Can the existing architecture and PRD largely accommodate the change?
  - [ ] Estimate effort for these adjustments.
- [ ] **Option 2: Significant Rework / New Epic:**
  - [ ] Does the issue require a new epic or substantial rework of the current one?
  - [ ] What are the implications for other epics if this path is chosen (scope, timeline)?
  - [ ] Outline the goals and potential stories for a new/reworked epic.
  - [ ] Estimate effort for this rework (consider architecture, design, dev work, data implications).
  - [ ] Compare the net benefit/cost vs. Direct Adjustment.
- [ ] **Option 3: PRD MVP Review & Potential Re-scoping:**
  - [ ] Is the original PRD MVP still achievable given the issue and constraints?
  - [ ] Does the MVP scope need reduction (removing features/epics)?
  - [ ] Do the core MVP goals need modification?
  - [ ] Are alternative approaches needed to meet the original MVP intent?
  - [ ] **Extreme Case:** Does the issue necessitate a fundamental replan or potentially a new PRD V2 (to be handled by PM)?
- [ ] **Select Recommended Path:** Based on the evaluation, agree on the most viable path forward.

## 5. Sprint Change Proposal Components

_(Ensure all agreed-upon points from previous sections are captured in the proposal)_

- [ ] **Identified Issue Summary:** Clear, concise problem statement.
- [ ] **Epic Impact Summary:** How epics are affected.
- [ ] **Artifact Adjustment Needs:** List of documents to change.
- [ ] **Recommended Path Forward:** Chosen solution with rationale.
- [ ] **PRD MVP Impact:** Changes to scope/goals (if any).
- [ ] **High-Level Action Plan:** Next steps for stories/updates.
- [ ] **Agent Handoff Plan:** Identify roles needed (PM, Arch, Design Arch, PO).

## 6. Final Review & Handoff

- [ ] **Review Checklist:** Confirm all relevant items were discussed.
- [ ] **Review Sprint Change Proposal:** Ensure it accurately reflects the discussion and decisions.
- [ ] **User Approval:** Obtain explicit user approval for the proposal.
- [ ] **Confirm Next Steps:** Reiterate the handoff plan and the next actions to be taken by specific agents.

---
