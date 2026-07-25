# Technical Decisions

Log of technical decisions not spelled out in the PRD, Design Blueprint, or Build Prompt, per Bagian 1 of the Build Prompt ("Setiap keputusan teknis yang tidak tertulis di dokumen mana pun, catat di sini dengan alasannya").

## Fase 0

### Monorepo layout: `apps/api`, `apps/web`

The stack section lists separate backend/frontend/scheduler services but doesn't name a folder layout. Used a standard monorepo split (`apps/api` for FastAPI, `apps/web` for Next.js) so each app has its own Dockerfile and dependency manifest, with `docs/` at the root for shared reference material.

### Scheduler as a module inside `apps/api`, not a separate package

The Build Prompt requires the scheduler to run "dalam proses terpisah (bukan di worker web)" but doesn't say whether it's a separate codebase. Kept it as `apps/api/scheduler/`, sharing the same image, dependencies, and (from Phase 1 on) the same SQLAlchemy models as the API — it needs to read the same tables to generate recurring tasks and send notifications. `docker-compose.yml` runs it as a distinct container with `command: python -m scheduler.main`, satisfying "proses terpisah" without duplicating code.

### Async SQLAlchemy 2.0 (asyncpg) instead of sync

Design Blueprint only says "SQLAlchemy 2.0," not sync vs. async. Chose async (`asyncpg` driver) since FastAPI is async-native and the frontend polls frequently (15–60s intervals across many endpoints per Bagian 5); async avoids blocking the event loop under concurrent polling load. Alembic is wired for async migrations via `run_sync`.

### Python dependency management: plain `requirements.txt`, not Poetry/uv

Not specified anywhere. Chose plain pip + `requirements.txt`/`requirements-dev.txt` for the lowest-friction Docker build and CI setup. Can be revisited later if dependency locking becomes a pain point.

### Next.js package manager: npm

Not specified. Used npm (ships with Node, no extra tooling) rather than pnpm/yarn.

### shadcn/ui not yet initialized with components

`components.json` is scaffolded (style, aliases, Tailwind wiring) so `npx shadcn add <component>` works out of the box, but no components are installed yet — there's nothing to build UI for until Fase 6 (dashboard perawat). Avoids installing unused component code this early.

### Web Dockerfile builds a production standalone bundle, no dev volume mount

`docker-compose.yml`'s `web` service doesn't mount source as a volume (unlike `api`, which does for fast iteration). Next.js standalone output is a multi-stage build; live-reload dev experience can be added later (e.g. a `docker-compose.override.yml` for local dev) if needed — not required for Fase 0's "docker compose up menyalakan 4 service" criterion.

### `npm audit` flags high-severity advisories in `next`'s bundled `postcss`/`sharp`

Both are transitive dependencies bundled inside `node_modules/next`, not direct deps we control. `npm audit fix --force` would downgrade Next.js to v9 (not a real fix). Left as-is for Fase 0; worth re-checking when Next.js ships a patch release.
