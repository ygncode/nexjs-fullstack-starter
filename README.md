# Next.js Fullstack Starter

Next.js fullstack starter with PostgreSQL and Docker.

## Tech Stack

- Next.js 16
- PostgreSQL 18
- Tailwind CSS v4 + shadcn/ui
- pnpm

## Getting Started

### With Docker (Recommended)

```bash
docker compose up --build
```

App: http://localhost:33333
Database: localhost:33334

### Without Docker

1. Copy environment variables:
```bash
cp .env.example .env
```

2. Start the development server:
```bash
pnpm dev
```

Open http://localhost:3000

## Environment Variables

See `.env.example` for required variables.
