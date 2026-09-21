import { Injectable } from '@nestjs/common';

/**
 * TranscriptsService — placeholder.
 *
 * Business logic to be implemented in later tasks:
 *   - createTextTranscript(userId, text): persist Transcript row via PrismaService,
 *       then enqueue a summarization job via Bull
 *   - createAudioTranscript(userId, audioBuffer): send audio to AiService→Whisper,
 *       then delegate to createTextTranscript with the resulting text
 *   - findAll(userId): return paginated list of Transcript rows
 *   - findOne(userId, id): return a single Transcript with its Summary + ActionItems
 *   - search(userId, query): full-text keyword search over raw_text
 */
@Injectable()
export class TranscriptsService {
  /** Placeholder — returns a simple status object. */
  getStatus(): { status: string } {
    return { status: 'TranscriptsService ready' };
  }
}
