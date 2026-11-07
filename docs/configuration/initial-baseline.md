# Initial Project Baseline

**Project:** Legal Representation Platform  
**Baseline identifier:** LR-BL-0.2.0
**Baseline version:** 0.2.0
**Status:** Application-foundation baseline

## Purpose

This record defines the first controlled snapshot that contains the application foundation. It supersedes the documentation-only baseline `LR-BL-0.1.0`.

## Baseline contents

| CI ID | Item | Repository location | Version |
| --- | --- | --- | --- |
| LR-CI-DOC-001 | Configuration Item Inventory | `docs/configuration/ci-inventory.md` | 0.2.0 |
| LR-CI-DOC-002 | Configuration Identification and Naming Convention | `docs/configuration/naming-convention.md` | 0.1.0 |
| LR-CI-DOC-003 | Initial Project Baseline | `docs/configuration/initial-baseline.md` | 0.2.0 |
| LR-CI-DOC-004 | Project README | `README.md` | 0.1.0 |
| LR-CI-REQ-001 | Software Requirements Specification | `docs/requirements/software-requirements-specification.md` | 0.1.0 |
| LR-CI-SRC-001 | Next.js application | `src/app/` | 0.1.0 |
| LR-CI-SRC-002 | Shared server and utility modules | `src/lib/` | 0.1.0 |
| LR-CI-DB-001 | Prisma database schema | `prisma/schema.prisma` | 0.1.0 |
| LR-CI-CFG-002 | Node package manifest | `package.json` | 0.2.0 |
| LR-CI-CFG-003 | TypeScript compiler configuration | `tsconfig.json` | 0.1.0 |
| LR-CI-CFG-004 | Environment-variable template | `.env.example` | 0.1.0 |
| LR-CI-TST-001 | Automated test suite | `tests/` | 0.1.0 |
| LR-CI-BLD-001 | Continuous-integration workflow | `.github/workflows/ci.yml` | 0.1.0 |

## Repository structure included

```text
src/app/         Next.js application routes and user interface
src/lib/         Shared database client
prisma/          PostgreSQL schema
tests/           Automated checks
docs/            Configuration and requirements records
```

## Baseline reference

The baseline is established when the commit containing this record is tagged `baseline-v0.2.0`. Record the resulting commit hash in the repository release notes or a later approved baseline update.

## Exclusions and next update

Shared UI components and database migrations are not part of this baseline because those artifacts are not present yet. Add them to a later baseline only after their actual files have been committed and their inventory entries have been updated.
