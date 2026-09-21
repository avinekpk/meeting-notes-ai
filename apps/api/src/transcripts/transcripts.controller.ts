import { Controller, Get } from '@nestjs/common';

/**
 * TranscriptsController — placeholder.
 *
 * Endpoints to be implemented across the "TranscriptsModule: text transcript upload",
 * "Audio upload → Whisper → stored as text", and "List/search/detail endpoints" tasks:
 *   POST /transcripts          — validate + persist a text transcript
 *   POST /transcripts/audio    — accept audio file, transcribe via AiService, persist
 *   GET  /transcripts          — list transcripts (paginated, auth-scoped)
 *   GET  /transcripts/:id      — single transcript with summary + action items
 *   GET  /transcripts/search   — keyword search
 */
@Controller('transcripts')
export class TranscriptsController {
  /** Health-check route — confirms the transcripts router is mounted. */
  @Get('health')
  health(): { status: string } {
    return { status: 'transcripts module ok' };
  }
}
