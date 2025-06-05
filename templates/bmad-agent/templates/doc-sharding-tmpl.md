# Document Sharding Plan Template

This plan directs the agent on how to break down large source documents into smaller, granular files during its Librarian Phase. The agent will refer to this plan to identify source documents, the specific sections to extract, and the target filenames for the sharded content.

---

## 1. Source Document: PRD (Project Requirements Document)

- **Note to Agent:** Confirm the exact filename of the PRD with the user (e.g., `PRD.md`, `ProjectRequirements.md`, `prdx.y.z.md`).

### 1.1. Epic Granulation

- **Instruction:** For each Epic identified within the PRD:
- **Source Section(s) to Copy:** The complete text for the Epic, including its main description, goals, and all associated user stories or detailed requirements under that Epic. Ensure to capture content starting from a heading like "**Epic X:**" up to the next such heading or end of the "Epic Overview" section.
- **Target File Pattern:** `docs/epic-<id>.md`
  - _Agent Note: `<id>` should correspond to the Epic number._

---

## 2. Source Document: Main Architecture Document

- **Note to Agent:** Confirm the exact filename with the user (e.g., `architecture.md`, `SystemArchitecture.md`).

### 2.1. Core Architecture Granules

- **Source Section(s) to Copy:** Section(s) detailing "API Reference", "API Endpoints", or "Service Interfaces".
- **Target File:** `docs/api-reference.md`

- **Source Section(s) to Copy:** Section(s) detailing "Data Models", "Database Schema", or "Entity Relationship Diagram (ERD) Explanations".
- **Target File:** `docs/data-models.md`

- **Source Section(s) to Copy:** Section(s) detailing "Deployment Strategy", "Infrastructure Overview", or "CI/CD Pipeline".
- **Target File:** `docs/deployment-strategy.md`

- **Source Section(s) to Copy:** Section(s) detailing "Security Considerations", "Authentication & Authorization Mechanisms", or "Data Privacy Policies".
- **Target File:** `docs/security-architecture.md`

- **Source Section(s) to Copy:** Section(s) detailing "System Components Overview", "Module Breakdown", or "High-Level System Diagram Explanations".
- **Target File:** `docs/system-components-overview.md`

- **Source Section(s) to Copy:** Section(s) detailing "Technology Stack" (both backend and frontend if not separated).
- **Target File:** `docs/technology-stack.md`

- **Source Section(s) to Copy:** Section(s) detailing "Coding Standards", "Development Best Practices", or "Style Guides" (general, not front-end specific if FE arch doc exists).
- **Target File:** `docs/coding-standards.md`

- **Source Section(s) to Copy:** Section(s) detailing "Testing Strategy" (overall, not front-end specific if FE arch doc exists).
- **Target File:** `docs/testing-strategy.md`

- **Source Section(s) to Copy:** Section(s) detailing "Non-Functional Requirements (NFRs)" such as performance, scalability, reliability, maintainability, if these are detailed within the architecture document.
- **Target File:** `docs/nfr-details.md`
  - _Agent Note: NFRs are often in the PRD. If they are primarily in the PRD, this shard might be minimal or redundant. Prioritize PRD as the source for NFRs unless architecture doc has more specific technical details._

---

## 3. Source Document: Frontend Architecture Document

- **Note to Agent:** Confirm the exact filename with the user (e.g., `front-end-architecture.md`, `FE_Arch.md`). If a separate frontend architecture document does not exist, these sharding instructions for it should be ignored.

### 3.1. Frontend Architecture Granules

- **Source Section(s) to Copy:** Section(s) detailing "Frontend Directory Structure".
- **Target File:** `docs/front-end-directory-structure.md`
  - _Agent Note: This is often a key part of the main FE architecture document, ensure it's captured if it exists._

- **Source Section(s) to Copy:** Section(s) detailing "Overall Frontend Philosophy & Patterns" (if this provides a good summary distinct from the main architecture's tech stack section).
- **Target File:** `docs/front-end-philosophy.md`
  - _Agent Note: Avoid duplication if this is already well-covered by `docs/technology-stack.md` from the main architecture, unless the FE doc provides significantly more detail or a different perspective specific to frontend patterns (e.g., specific SPA patterns, micro-frontend approaches). If largely redundant, this shard can be skipped or kept minimal, focusing only on unique FE philosophy points not covered elsewhere._

- **Source Section(s) to Copy:** Section(s) detailing "Component Breakdown & Implementation Details". This might include a template for component specification or a list of key reusable/feature components.
- **Target File:** `docs/front-end-component-breakdown.md`
  - _Agent Note: This is different from a full component guide, which is a separate shard below. This focuses on the architectural approach to components, not the detailed specs of each one, unless those details are embedded within this section of the architecture doc._

- **Source Section(s) to Copy:** Section(s) detailing "Styling Approach" (e.g., CSS Modules, Tailwind CSS, Styled Components) and any related theming strategy.
- **Target File:** `docs/front-end-styling-approach.md`
  - _Agent Note: This might be part of "Overall Frontend Philosophy" or a standalone section. Extract if it provides substantial detail on styling methodologies and tools._

- **Source Section(s) to Copy:** Section(s) detailing "Accessibility (A11y) Plan" specifically for the frontend.
- **Target File:** `docs/front-end-accessibility-plan.md`
  - _Agent Note: This should cover target standards (WCAG), tools, and specific frontend considerations for accessibility. If this is only a brief mention and detailed AX requirements are in the UI/UX Spec, this shard might be minimal or point to the UI/UX spec._

- **Source Section(s) to Copy:** Section(s) detailing "Performance Budgets & Optimization Strategies" for the frontend.
- **Target File:** `docs/front-end-performance.md`

- **Source Section(s) to Copy:** Section(s) detailing "Internationalization (i18n) & Localization (l10n) Strategy" for the frontend.
- **Target File:** `docs/front-end-i18n-l10n.md`
  - _Agent Note: If not applicable or not detailed, this shard can be skipped._

- **Source Section(s) to Copy:** Section(s) detailing "Browser Support & Polyfills".
- **Target File:** `docs/front-end-browser-support.md`

  _The following are more specific implementation details often found within the frontend architecture document itself._

- **Source Section(s) to Copy:** Section(s) detailing "Component Library", "Reusable UI Components Guide", "Atomic Design Elements", or "Component Breakdown & Implementation Details".
- **Target File:** `docs/front-end-component-guide.md`

- **Source Section(s) to Copy:** Section(s) detailing "Front-End Coding Standards" (specifically for UI development, e.g., JavaScript/TypeScript style, CSS naming conventions, accessibility best practices for FE).
- **Target File:** `docs/front-end-coding-standards.md`

  - _Agent Note: A dedicated top-level section for this might not exist. If not found, this shard might be empty or require cross-referencing with the main architecture's coding standards. Extract any front-end-specific coding conventions mentioned._

- **Source Section(s) to Copy:** Section(s) titled "State Management In-Depth".
- **Target File:** `docs/front-end-state-management.md`

- **Source Section(s) to Copy:** Section(s) titled "API Interaction Layer".
- **Target File:** `docs/front-end-api-interaction.md`

- **Source Section(s) to Copy:** Section(s) titled "Routing Strategy".
- **Target File:** `docs/front-end-routing-strategy.md`

- **Source Section(s) to Copy:** Section(s) titled "Frontend Testing Strategy".
- **Target File:** `docs/front-end-testing-strategy.md`

---

CRITICAL: **Index Management:** After creating the files, update `docs/index.md` as needed to reference and describe each doc - do not mention granules or where it was sharded from, just doc purpose - as the index also contains other doc references potentially.
