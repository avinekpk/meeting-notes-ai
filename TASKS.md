# Tasks

One checklist item ≈ one agent turn. Work top to bottom, check items off as
they're done, don't skip ahead. Each item has a suggested prompt you can hand
the agent as-is — adjust if you want to steer something differently.

## Scaffolding

- [x] Init NestJS project, set up module structure
      > "Scaffold the NestJS app in apps/api per AGENTS.md and PROJECT_BRIEF.md — AuthModule, TranscriptsModule, SummaryModule as empty modules with placeholder controllers/services."
- [ ] Init React (Vite) project
      > "Scaffold apps/web as a React + Vite app, TypeScript template, no extra UI library yet."
- [ ] Prisma schema for User, Transcript, Summary, ActionItem
      > "Add Prisma to apps/api and write the schema from PROJECT_BRIEF.md's data model. Generate the initial migration."
- [ ] docker-compose with postgres, redis, api, web
      > "Write docker-compose.yml wiring up postgres, redis, api, and web per PROJECT_BRIEF.md's env vars."

## Auth & Transcript upload

- [ ] AuthModule: register/login, JWT guard
      > "Implement AuthModule: register and login endpoints, JWT strategy and guard, password hashing. Add Jest tests."
- [ ] TranscriptsModule: text transcript upload
      > "Implement the text-transcript upload endpoint in TranscriptsModule — validates input, persists via Prisma, returns the created transcript. Add Jest tests."
- [ ] Audio upload → Whisper → stored as text
      > "Add audio upload to TranscriptsModule: accept a file, send it to Whisper via AiService, store the resulting text as the transcript. Mock Whisper in tests."
- [ ] Basic React upload form
      > "Build a React upload form (text + file input) that posts to the transcript upload endpoints."

## Summarization pipeline

- [ ] Bull/Redis queue setup
      > "Wire up Bull with the Redis connection from .env, add a queue for summarization jobs."
- [ ] SummaryModule enqueues job on transcript creation
      > "Have TranscriptsModule enqueue a summarization job whenever a transcript is created, per PROJECT_BRIEF.md's architecture."
- [ ] AiService: summarization + action-item extraction
      > "Implement AiService's summarize method: prompt the LLM provider for a summary plus a list of action items (description, owner, deadline). Include retry/rate-limit handling. Mock the LLM client in tests."
- [ ] Worker writes Summary + ActionItem rows
      > "Implement the Bull processor that calls AiService and persists Summary + ActionItem rows, updating job status along the way."

## History & UI

- [ ] List/search/detail endpoints
      > "Add endpoints to TranscriptsModule/SummaryModule: list transcripts, get a transcript's summary + action items, basic keyword search."
- [ ] React history + detail views
      > "Build a history view listing past transcripts and a detail view showing summary + action items for one."
- [ ] Job-status polling in the UI
      > "Add simple polling (or refresh) in the React detail view so it updates once a pending summary becomes done."

## Testing & DevOps

- [ ] Fill in remaining Jest coverage
      > "Review AiService and all controllers against AGENTS.md's testing rules — add any missing failure-case tests."
- [ ] GitHub Actions CI (lint + test)
      > "Add a GitHub Actions workflow that installs deps, lints, and runs Jest on every PR."
- [ ] Multi-stage Dockerfiles for api and web
      > "Write multi-stage Dockerfiles for apps/api and apps/web, optimized for small final images."
- [ ] Deploy to EC2 or ECS Fargate
      > "Propose a deployment approach for EC2 vs ECS Fargate with tradeoffs, then implement the one I pick." (this is a boundary item in AGENTS.md — confirm before the agent provisions anything)

## Stretch goals

- [ ] Export action items as CSV
- [ ] Basic rate-limiting on the upload endpoint
- [ ] Full-text search on transcripts
