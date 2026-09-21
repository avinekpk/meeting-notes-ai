import { Injectable } from '@nestjs/common';

/**
 * SummaryService — placeholder.
 *
 * Business logic to be implemented in later tasks:
 *   - enqueueJob(transcriptId): push a summarization job onto the Bull queue
 *   - getStatus(transcriptId): return the current Summary.status for the transcript
 *   - getResult(transcriptId): return the Summary row plus its ActionItem rows
 *
 * Note: only AiService is allowed to call the LLM provider directly.
 * SummaryService will call AiService (via the Bull worker processor) rather than
 * the LLM SDK directly.
 */
@Injectable()
export class SummaryService {
  /** Placeholder — returns a simple status object. */
  getStatus(): { status: string } {
    return { status: 'SummaryService ready' };
  }
}
