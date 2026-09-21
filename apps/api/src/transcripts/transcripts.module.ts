import { Module } from '@nestjs/common';
import { TranscriptsController } from './transcripts.controller';
import { TranscriptsService } from './transcripts.service';

/**
 * TranscriptsModule — upload, store, list, and search meeting transcripts.
 *
 * Planned contents (added across the "TranscriptsModule" and "Audio upload" tasks):
 *   - POST /transcripts          — upload a text transcript
 *   - POST /transcripts/audio    — upload an audio file (routed through AiService→Whisper)
 *   - GET  /transcripts          — list transcripts for the authenticated user
 *   - GET  /transcripts/:id      — get a single transcript with its summary
 *   - GET  /transcripts/search   — keyword search over raw_text
 *
 * Dependencies to be injected in later tasks:
 *   - PrismaService (for DB persistence)
 *   - AiService (for Whisper audio transcription)
 *   - Bull queue producer (to enqueue summarization jobs)
 */
@Module({
  controllers: [TranscriptsController],
  providers: [TranscriptsService],
  exports: [TranscriptsService],
})
export class TranscriptsModule {}
