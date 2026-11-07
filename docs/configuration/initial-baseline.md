# Initial Project Baseline

**Project:** Legal Representation Platform  
**Baseline identifier:** LR-BL-0.1.0  
**Baseline version:** 0.1.0  
**Status:** Initial documentation baseline

## Purpose

This record defines the first controlled snapshot of the repository. At the time this record was created, the public repository contained no application source code, package manifest, database schema, or test files. The baseline therefore covers only the requested documentation structure and configuration-identification records.

## Baseline contents

| CI ID | Item | Repository location | Version |
| --- | --- | --- | --- |
| LR-CI-DOC-001 | Configuration Item Inventory | `docs/configuration/ci-inventory.md` | 0.1.0 |
| LR-CI-DOC-002 | Configuration Identification and Naming Convention | `docs/configuration/naming-convention.md` | 0.1.0 |
| LR-CI-DOC-003 | Initial Project Baseline | `docs/configuration/initial-baseline.md` | 0.1.0 |
| LR-CI-CFG-001 | Documentation directory structure | `docs/` | 0.1.0 |

## Repository structure included

```text
docs/
├── configuration/
│   ├── ci-inventory.md
│   ├── initial-baseline.md
│   └── naming-convention.md
├── design/
├── requirements/
├── scmp/
└── testing/
```

## Baseline reference

The baseline is established when the commit containing this record is tagged `baseline-v0.1.0`. Record the resulting commit hash in the repository release notes or a later approved baseline update.

## Exclusions and next update

The planned Next.js, TypeScript, PostgreSQL, and Prisma artifacts are not part of this baseline because they were not present in the repository. Add them to a later baseline only after their actual files have been committed and their inventory entries have been updated.
