- Only create an abstraction if it's actually needed
- Prefer clear function/variable names over inline comments
- Avoid helper functions when a simple inline expression would suffice
- Use `knip` to remove unused code if making large changes
- The `gh` CLI is installed, use it
- Don't use emojis
- Use `pnpm` for package

## React

- Avoid massive JSX blocks and compose smaller components
- Colocate code that changes together
- Avoid `useEffect` unless absolutely needed

## Next.js

- Mutations (create, update, delete) use Server Actions
- Data fetching (read) use API Routes + SWR
- Webhooks use API Routes
- Server Actions handle form submissions and mutations, while API routes serve as endpoints for client-side data fetching libraries like SWR.
- Folder structure: colocate `actions.ts` with features for mutations, use `app/api/[resource]/route.ts` for data fetching endpoints

## Tailwind

- Mostly use built-in values, occasionally allow dynamic values, rarely globals
- Always use v4 + global CSS file format + shadcn/ui

## TypeScript

- Don't unnecessarily add `try`/`catch`
