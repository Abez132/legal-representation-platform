import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const requiredFiles = [
  "package.json",
  "src/app/page.tsx",
  "src/app/api/health/route.ts",
  "prisma/schema.prisma",
  ".env.example",
  "docs/requirements/software-requirements-specification.md",
];

test("project includes the initial application and configuration artifacts", () => {
  for (const file of requiredFiles) {
    assert.equal(existsSync(file), true, `${file} should exist`);
  }
});

test("database schema uses PostgreSQL", () => {
  const schema = readFileSync("prisma/schema.prisma", "utf8");
  assert.match(schema, /provider\s*=\s*"postgresql"/);
});
