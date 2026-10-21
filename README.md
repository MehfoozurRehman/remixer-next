# remixer-next

A Next.js todo list backed by MongoDB through Prisma, built to test Prisma with server actions.

**Status:** Prototype. It tests one idea, Prisma against MongoDB behind Next.js server actions, with one model and one page.

## The problem

The code is a todo list. It stores a todo with a title, optional content and a completed flag, and it shows the list on one page.

## What it does

- Lists all todos on the home page, using a query in `api/queries.ts`.
- Creates a todo from a title and content form, using `next/form` and the `createTodo` server action.
- Changes a todo's completed status with `updateTodoStatus`, called from `app/Todo.tsx`.
- Deletes a todo with `deleteTodo` in `api/actions.ts`.

## How it's built

- Next.js 15 with React 19 (a canary build), TypeScript and Prisma 5 with the MongoDB provider.
- Data access is split between `api/queries.ts` (reads) and `api/actions.ts` (writes), and the page calls both from server components.
- The database URL is read from the `DATABASE_URL` environment variable in `prisma/schema.prisma`.

## Running it locally

Set `DATABASE_URL` to a MongoDB connection string, then:

```bash
pnpm install
pnpm generate
pnpm dev
```

`pnpm generate` runs `prisma generate`. `pnpm dev` runs `next dev --turbopack`. `pnpm studio` opens Prisma Studio.

## What's left

- React is pinned to a 19.3 canary build, so the app depends on an unreleased version.
- `@types/react` is version 18 while React is version 19, which is a mismatch.
- Input is not validated. The title field accepts an empty string.
- Server actions have no error handling.
- There are no tests.
