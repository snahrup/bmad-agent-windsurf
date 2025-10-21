const fs = require('fs-extra');
const os = require('node:os');
const path = require('node:path');

// The CLI entry is now dist/index.js (built from src/init.js)
// For testing, we'll use the source directly via src/init.js
const init = require('../src/init');

describe('CLI init', () => {
  let tmp;

  beforeEach(async () => {
    tmp = await fs.mkdtemp(path.join(os.tmpdir(), 'bmad-test-'));
  });

  afterEach(async () => {
    await fs.remove(tmp);
  });

  test('initializes full template by default', async () => {
    const outPath = path.join(tmp, 'demo');
    await fs.ensureDir(outPath);

    await init({ force: true, path: outPath });

    // Expect core outputs to exist
    const agentRoot = path.join(outPath, 'bmad-agent');
    expect(await fs.pathExists(agentRoot)).toBe(true);
    expect(await fs.pathExists(path.join(outPath, '.windsurfrules'))).toBe(true);

    // Check that some core files exist
    expect(await fs.pathExists(path.join(agentRoot, 'ide-bmad-orchestrator.cfg.md'))).toBe(true);
    expect(await fs.pathExists(path.join(agentRoot, 'personas'))).toBe(true);
  }, 30000);

  test('minimal mode copies limited set', async () => {
    const outPath = path.join(tmp, 'mini');
    await fs.ensureDir(outPath);

    await init({ force: true, minimal: true, path: outPath });

    const agentRoot = path.join(outPath, 'bmad-agent');

    // Core files should exist
    expect(await fs.pathExists(path.join(agentRoot, 'ide-bmad-orchestrator.cfg.md'))).toBe(true);
    expect(await fs.pathExists(path.join(agentRoot, 'personas/dev.ide.md'))).toBe(true);
    expect(await fs.pathExists(path.join(agentRoot, 'checklists/story-draft-checklist.md'))).toBe(
      true
    );

    // But not all personas should be there (checking one that's not in allowlist)
    const allPersonas = await fs.readdir(path.join(agentRoot, 'personas'));
    // In minimal mode, we should have fewer personas than full mode
    expect(allPersonas.length).toBeLessThan(5);
  }, 30000);

  test('analyze writes a report', async () => {
    const outPath = path.join(tmp, 'analyze');
    await fs.ensureDir(outPath);

    // Create a minimal package.json so analyzer has something to detect
    await fs.writeJson(path.join(outPath, 'package.json'), {
      name: 'test-project',
      dependencies: { react: '^18.0.0' },
    });

    await init({ force: true, analyze: true, path: outPath });

    const reportPath = path.join(outPath, 'bmad-agent', 'reports', 'analysis-report.md');
    expect(await fs.pathExists(reportPath)).toBe(true);

    const content = await fs.readFile(reportPath, 'utf8');
    expect(content).toContain('# BMAD Project Analysis Report');
    expect(content).toContain('React'); // Should detect React dependency
  }, 30000);
});
