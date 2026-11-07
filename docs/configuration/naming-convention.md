# Configuration Identification and Naming Convention

**Project:** Legal Representation Platform  
**Document version:** 0.1.0  
**Effective from:** Initial documentation baseline

## 1. Configuration-item identifiers

Each configuration item uses this identifier:

`LR-CI-<CATEGORY>-<NUMBER>`

`LR` identifies the Legal Representation Platform, `CI` means configuration item, `CATEGORY` identifies the artifact type, and `NUMBER` is a three-digit sequential number that is unique within the category.

| Category code | Used for |
| --- | --- |
| REQ | Requirements artifacts |
| ARC | Architecture artifacts |
| DSN | Design and data-model artifacts |
| SRC | Application source code |
| DB | Database schema, migrations, and seed artifacts |
| TST | Test plans, test cases, and automated tests |
| CFG | Project and tool configuration |
| BLD | Build, deployment, and automation artifacts |
| DOC | Project documentation |

Examples: `LR-CI-DOC-001`, `LR-CI-SRC-001`, and `LR-CI-DB-001`.

## 2. Repository and file names

Use lowercase kebab-case for new Markdown documents and directories: `initial-baseline.md`, `user-management.md`, and `docs/requirements/`.

Keep framework-standard names where the tool requires them, including `package.json`, `tsconfig.json`, `schema.prisma`, `.env.example`, and GitHub Actions workflow files ending in `.yml` or `.yaml`.

For the selected Next.js full stack, use the following directory roles when those artifacts are created:

| Location | Role |
| --- | --- |
| `src/app/` | Next.js routes, layouts, and route handlers |
| `src/components/` | Reusable interface components |
| `src/lib/` | Shared server, database, and utility modules |
| `prisma/` | Prisma schema and migrations |
| `tests/` | Automated tests |
| `.github/workflows/` | Continuous-integration workflows |

## 3. Document versions

Use semantic versions in the form `MAJOR.MINOR.PATCH`.

| Change | Version change | Example |
| --- | --- | --- |
| Approved major change to scope or structure | Increment MAJOR | 1.2.3 to 2.0.0 |
| New approved content that remains compatible | Increment MINOR | 1.2.3 to 1.3.0 |
| Correction or clarification | Increment PATCH | 1.2.3 to 1.2.4 |

New controlled artifacts start at `0.1.0` while they are initial or evolving. Move to `1.0.0` when the team approves the item for its first stable release.

## 4. Git conventions

Use short, imperative commit messages that state the change, such as `Add configuration identification records` or `Add Prisma schema`.

Create a Git tag for each approved baseline using `baseline-v<version>`, for example `baseline-v0.1.0`. The tag must point to the commit that contains the approved baseline record.

## 5. Control procedure

When adding or changing a controlled artifact, update the CI Inventory and revise the baseline record if the change is approved for a baseline. Reviewers should be able to find the CI ID, file path, version, and related Git commit or tag from these records.
