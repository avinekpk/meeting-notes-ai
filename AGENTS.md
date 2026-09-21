# AGENTS.md

Standing instructions for any AI agent (Antigravity, Cursor, Claude Code, etc.)
working in this repo. Read this before starting any task. See `PROJECT_BRIEF.md`
for what we're building and `TASKS.md` for the current build sequence.

## Project

An AI meeting-notes and action-item extractor. Full context is in
`PROJECT_BRIEF.md` — read it before generating code.

## Tech stack (do not substitute without asking)

- Frontend: React + Vite
- Backend: NestJS (TypeScript)
- Database: PostgreSQL via Prisma
- Queue: Bull on Redis
- AI: a single `AiService` wrapping the LLM provider (Claude or OpenAI) + Whisper for audio
- Infra: Docker, docker-compose for local dev, GitHub Actions CI, deploy to EC2 or ECS Fargate

## Repo structure

```
apps/api/     NestJS backend
apps/web/     React (Vite) frontend
docker-compose.yml
.github/workflows/ci.yml
```

Keep backend and frontend code inside their respective `apps/*` folders. Don't
introduce a third app or a monorepo tool (Nx, Turborepo) unless asked.

## Coding standards

- TypeScript strict mode, no `any` unless justified in a comment.
- NestJS: one module per bounded concern (`AuthModule`, `TranscriptsModule`,
  `SummaryModule`). Controllers stay thin — business logic lives in services.
- All LLM/Whisper calls go through `AiService`. Nothing else calls the
  provider SDK directly.
- Prisma for all DB access — no raw SQL unless there's no other way, and
  explain why in a comment if you do.
- React: functional components + hooks, no class components.

## Environment & secrets

- Never hardcode API keys, DB credentials, or secrets in source. Read from
  `.env` (see `PROJECT_BRIEF.md` for the variable list) via NestJS
  `ConfigModule`.
- Never commit `.env` files. Add/keep them in `.gitignore`.
- If a task needs a new secret, add it to `.env.example` with a placeholder
  value and tell me — don't invent a fallback key or skip the check.

## Testing

- Every new service or controller gets Jest unit tests in the same PR that
  introduces it — not deferred to a later task.
- `AiService` tests must mock the LLM/Whisper clients. No real API calls in
  tests, ever.
- Don't just test the happy path — include at least one failure/edge case
  per unit (bad input, provider error, empty result).
- Run `npm run lint && npm run test` before considering a task done.

## Boundaries — ask before doing these

- Adding a new top-level dependency or infra piece not listed in the stack
  above.
- Changing the data model in a way that isn't additive (renaming/dropping
  columns, changing a relation).
- Anything that touches deployment config (Dockerfile, CI workflow, AWS
  resources) — propose the change and explain the tradeoff first.
- Switching LLM or Whisper providers.

## Workflow

- Work through `TASKS.md` in order — each checklist item is meant to be one
  agent turn. Don't jump ahead to a later section before the current one is done.
- When a task is done, check it off in `TASKS.md` and summarize what changed.
- If a task is ambiguous or the brief doesn't specify something (e.g. exact
  auth flow, exact prompt wording), make a reasonable choice, note the
  assumption in your summary, and keep moving — don't stall waiting for
  clarification unless it's one of the boundary items above.
