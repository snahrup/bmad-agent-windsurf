# Contributing

## Quick Start
1. Node 18+
2. `npm ci`
3. `npm run build` (bundles to `dist/`)
4. `npm test`

## Dev Conventions
- Run `npm run lint` and `npm run format` before commits.
- Keep PRs small, focused, and well-described.
- Add tests for new features and bug fixes.

## Releasing
- Bump version via semver.
- Update `CHANGELOG.md`.
- Tag the release. CI should pass before publishing.
