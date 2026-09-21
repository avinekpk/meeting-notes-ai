# Project Brief — AI Meeting Notes & Action-Item Extractor

## Feature

Upload a meeting transcript (text, or audio transcribed via the Whisper API), get:
- An AI-generated summary
- Extracted action items with owners and deadlines
- A searchable history of past meetings

## Architecture

```
React (Vite) SPA
      │  REST (JSON)
      ▼
NestJS API ──┬── AuthModule
             ├── TranscriptsModule
             └── SummaryModule
      │                 │
      ▼                 ▼
PostgreSQL        Bull/Redis Queue
(via Prisma)      (async summarization jobs)
                        │
                        ▼
                  AiService ──▶ LLM API (Claude/OpenAI)
                        │
                        └──▶ Whisper API (audio → text, when input is audio)
```

### Modules

- **`AuthModule`** — email/password or JWT auth, just enough to scope
  transcripts and history per user.
- **`TranscriptsModule`** — upload endpoint (text or audio file), audio goes
  through Whisper first, persists raw transcript + metadata, exposes
  list/search/detail endpoints.
- **`SummaryModule`** — enqueues a summarization job on transcript creation,
  a worker calls `AiService` and writes back summary + action items, exposes
  job-status and result endpoints.
- **`AiService`** — the only thing that talks to the LLM provider. Owns
  prompt construction, retries, and rate-limit handling.

### Data model

```
User
 └─ id, email, password_hash, created_at

Transcript
 └─ id, user_id, source_type (text|audio), raw_text, audio_url?, created_at

Summary
 └─ id, transcript_id, summary_text, status (pending|processing|done|failed), created_at

ActionItem
 └─ id, summary_id, description, owner, deadline, created_at
```

### Why a queue?

Summarization is slow (LLM latency) and shouldn't block the upload request.
The Bull/Redis queue decouples "transcript received" from "summary produced"
and gives a real event-driven pattern to work with (retries, job status,
backpressure) instead of a synchronous request/response chain.

## Environment variables

`apps/api/.env`:
```
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/meeting_notes
REDIS_URL=redis://redis:6379
JWT_SECRET=change-me
LLM_API_KEY=your-key-here
LLM_PROVIDER=anthropic   # or openai
WHISPER_API_KEY=your-key-here
```

`apps/web/.env`:
```
VITE_API_URL=http://localhost:3000
```

## Deployment shape

- Two containers: `api` (NestJS, includes the Bull worker) and `web` (React
  static build).
- `docker-compose.yml` wires up `api`, `web`, `postgres`, `redis` for local dev.
- GitHub Actions CI runs lint + Jest on every PR.
- Deploy target: a single EC2 instance or ECS Fargate — pick one and note why.

## Definition of done

- [ ] Upload a transcript (text or audio) end-to-end and see a summary + action items
- [ ] Action items persisted with owner/deadline, browsable in a history view
- [ ] Both services run via `docker-compose up`
- [ ] CI runs lint + Jest on every PR
- [ ] Deployed to a single EC2 instance or ECS Fargate
