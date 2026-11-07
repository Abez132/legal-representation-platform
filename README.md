# Legal Representation Platform

An initial full-stack foundation for a platform that helps people find and manage legal representation in Addis Ababa.

## Technology

- Next.js and React
- TypeScript
- PostgreSQL
- Prisma ORM

## Run locally

1. Copy `.env.example` to `.env` and provide a PostgreSQL connection string.
2. Install dependencies with `npm install`.
3. Generate the database client with `npm run db:generate`.
4. Start the app with `npm run dev`.

The health endpoint is available at `/api/health`.

## Project records

- [Configuration Item Inventory](docs/configuration/ci-inventory.md)
- [Naming Convention](docs/configuration/naming-convention.md)
- [Initial Baseline](docs/configuration/initial-baseline.md)
- [Software Requirements Specification](docs/requirements/software-requirements-specification.md)
