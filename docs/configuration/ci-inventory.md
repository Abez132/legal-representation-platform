# Configuration Item Inventory

**Project:** Legal Representation Platform  
**Inventory version:** 0.2.0
**Prepared:** 2026-11-07  
**Scope:** Repository contents at the initial documentation baseline

## Purpose

This inventory identifies the project artifacts that are under configuration control. It separates files already present in the repository from agreed stack artifacts that have not yet been created, so the record does not treat planned work as implemented work.

## Status values

| Status | Meaning |
| --- | --- |
| Baseline candidate | Present in the repository and included in the initial documentation baseline. |
| Planned | Identified for the agreed technology stack but not present in this repository yet. |

## Current configuration items

| CI ID | Configuration item | Category | Repository location | Version | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| LR-CI-DOC-001 | Configuration Item Inventory | Documentation | `docs/configuration/ci-inventory.md` | 0.2.0 | Baseline candidate | This inventory. |
| LR-CI-DOC-002 | Configuration Identification and Naming Convention | Documentation | `docs/configuration/naming-convention.md` | 0.1.0 | Baseline candidate | Identification, naming, and versioning rules. |
| LR-CI-DOC-003 | Initial Project Baseline | Documentation | `docs/configuration/initial-baseline.md` | 0.2.0 | Baseline candidate | Baseline record. |
| LR-CI-DOC-004 | Project README | Documentation | `README.md` | 0.1.0 | Baseline candidate | Setup and project overview. |
| LR-CI-REQ-001 | Software Requirements Specification | Requirements | `docs/requirements/software-requirements-specification.md` | 0.1.0 | Baseline candidate | Initial functional and non-functional requirements. |
| LR-CI-CFG-001 | Documentation directory structure | Configuration | `docs/` | 0.2.0 | Baseline candidate | Contains `scmp`, `requirements`, `design`, `testing`, and `configuration`. |
| LR-CI-CFG-002 | Node package manifest | Configuration | `package.json` | 0.2.0 | Baseline candidate | Runtime and development commands. |
| LR-CI-CFG-003 | TypeScript compiler configuration | Configuration | `tsconfig.json` | 0.1.0 | Baseline candidate | TypeScript project settings. |
| LR-CI-CFG-004 | Environment-variable template | Configuration | `.env.example` | 0.1.0 | Baseline candidate | PostgreSQL connection-string template. |
| LR-CI-SRC-001 | Next.js application | Source code | `src/app/` | 0.1.0 | Baseline candidate | App shell, landing page, and health endpoint. |
| LR-CI-SRC-002 | Shared server and utility modules | Source code | `src/lib/` | 0.1.0 | Baseline candidate | Prisma client singleton. |
| LR-CI-DB-001 | Prisma database schema | Database | `prisma/schema.prisma` | 0.1.0 | Baseline candidate | Initial `LawyerProfile` model. |
| LR-CI-TST-001 | Automated test suite | Testing | `tests/` | 0.1.0 | Baseline candidate | Structure and schema checks. |
| LR-CI-BLD-001 | Continuous-integration workflow | Build and deployment | `.github/workflows/ci.yml` | 0.1.0 | Baseline candidate | Runs test, lint, and build checks on pushes and pull requests. |

## Planned configuration items

The following items come from the selected Next.js, TypeScript, PostgreSQL, and Prisma stack. Their paths are intended locations only; the files and directories did not exist when this inventory was prepared.

| CI ID | Configuration item | Category | Intended location | Initial version | Status |
| --- | --- | --- | --- | --- | --- |
| LR-CI-SRC-003 | Shared UI components | Source code | `src/components/` | 0.1.0 | Planned |
| LR-CI-DB-002 | Prisma migrations | Database | `prisma/migrations/` | 0.1.0 | Planned |

## Update rule

Add a CI to this inventory when it becomes a controlled project artifact. Update its path, version, and status in the same change that adds or materially changes the artifact.
