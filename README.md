# Next.js Fullstack Starter

Next.js fullstack starter with PostgreSQL, authentication, and Docker.

## Tech Stack

- Next.js 16
- PostgreSQL 18
- Tailwind CSS v4 + shadcn/ui
- better-auth (authentication)
- Drizzle ORM (database)
- pnpm

## Getting Started

### With Docker (Recommended)

```bash
docker compose up --build
```

App: http://localhost:33333
Database: localhost:33334

Database migrations run automatically via `db:push` in the container.

### Without Docker

1. Copy environment variables:

```bash
cp .env.example .env
```

2. Set up your PostgreSQL database and update `DATABASE_URL` in `.env`

3. Apply database schema:

```bash
pnpm db:push
```

4. Start the development server:

```bash
pnpm dev
```

Open http://localhost:33333

## Authentication

This starter includes authentication via better-auth with the following features:

- Email/password sign-up and sign-in
- Session management with secure cookies
- Protected routes (`/dashboard`, `/settings`)
- Google OAuth (optional, requires configuration)

### Protected Routes

Routes under `/dashboard` and `/settings` require authentication. Unauthenticated users are redirected to the sign-in page.

## Environment Variables

| Variable               | Required | Description                                                  |
| ---------------------- | -------- | ------------------------------------------------------------ |
| `DATABASE_URL`         | Yes      | PostgreSQL connection string                                 |
| `BETTER_AUTH_SECRET`   | Yes      | Secret key for auth token signing                            |
| `BETTER_AUTH_URL`      | Yes      | Base URL for auth callbacks (e.g., `http://localhost:33333`) |
| `NEXT_PUBLIC_APP_URL`  | Yes      | Public app URL for client-side                               |
| `GOOGLE_CLIENT_ID`     | No       | Google OAuth client ID                                       |
| `GOOGLE_CLIENT_SECRET` | No       | Google OAuth client secret                                   |

See `.env.example` for a template.
