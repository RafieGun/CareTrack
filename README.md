# CareTrack

Aplikasi manajemen tugas perawatan pasien untuk panti lansia dan layanan home care.

## Dokumen acuan

- [`docs/PRD_CareTrack.md`](docs/PRD_CareTrack.md) — Product Requirements Document
- [`docs/CareTrack_V1_Design_Blueprint.md`](docs/CareTrack_V1_Design_Blueprint.md) — koreksi PRD, model status kanonik, sitemap, user flow (menang jika bertentangan dengan PRD)
- [`docs/CareTrack_V1_Build_Prompt.md`](docs/CareTrack_V1_Build_Prompt.md) — rencana eksekusi, business rules, stack
- [`docs/DECISIONS.md`](docs/DECISIONS.md) — keputusan teknis yang tidak tertulis di dokumen di atas

## Stack

| Layer | Teknologi |
|---|---|
| Backend | FastAPI (Python 3.12), SQLAlchemy 2.0 (async), Alembic, Pydantic v2 |
| Database | PostgreSQL 16 |
| Scheduler | APScheduler, proses terpisah dari web worker |
| Frontend | Next.js 15 (App Router), TypeScript, Tailwind, shadcn/ui |

## Struktur repo

```
apps/
  api/         FastAPI backend + scheduler + migrasi Alembic
  web/         Next.js frontend
docs/          Dokumen acuan & keputusan teknis
docker-compose.yml
```

## Menjalankan secara lokal

```bash
cp .env.example .env
docker compose up --build
```

- API: http://localhost:8000 (`/health` untuk healthcheck)
- Web: http://localhost:3000
- Database: `localhost:5432`

## Testing

```bash
# Backend
cd apps/api && pip install -r requirements-dev.txt && pytest

# Frontend
cd apps/web && npm ci && npm run lint && npm run build
```

## Status pengembangan

Proyek ini mengikuti rencana eksekusi bertahap di Bagian 9 `CareTrack_V1_Build_Prompt.md`. Setiap fase diselesaikan, diuji, dan direview sebelum fase berikutnya dimulai.

- [x] Fase 0 — Docker Compose, struktur repo, konfigurasi, CI dasar
- [ ] Fase 1 — Skema DB + migrasi Alembic + seed
- [ ] Fase 2 — Auth, RBAC, audit log
- ...selengkapnya di `docs/CareTrack_V1_Build_Prompt.md` Bagian 9
