# meeting-notes-ai

Upload meeting transcripts, get AI summaries and action items. NestJS + React + PostgreSQL + Redis queue.

## What it does

Upload a meeting transcript (text or audio), and get:
- An AI-generated summary
- Extracted action items with owners and deadlines
- A searchable history of past meetings

## Tech stack

- **Frontend:** React (Vite)
- **Backend:** NestJS
- **Database:** PostgreSQL (Prisma)
- **Queue:** Bull / Redis
- **AI:** Whisper (audio transcription) + Claude/OpenAI (summarization)
- **Infra:** Docker, docker-compose, GitHub Actions CI

## Quick start

```bash
git clone https://github.com/<your-username>/meeting-notes-ai.git
cd meeting-notes-ai
cp apps/api/.env.example apps/api/.env   # fill in your API keys
cp apps/web/.env.example apps/web/.env
docker-compose up --build
```

Frontend: http://localhost:5173 · API: http://localhost:3000

## Docs

- [PROJECT_BRIEF.md](./PROJECT_BRIEF.md) — full feature spec, architecture, data model
- [TASKS.md](./TASKS.md) — build checklist
- [AGENTS.md](./AGENTS.md) — standing instructions for AI coding agents working in this repo

## License

MIT — see [LICENSE](./LICENSE).
