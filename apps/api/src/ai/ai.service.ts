import { Injectable } from '@nestjs/common';

/**
 * AiService — the single gateway to all LLM and Whisper API calls.
 *
 * Rules (per AGENTS.md):
 *   - Nothing else in the codebase may import or instantiate the LLM/Whisper SDK directly.
 *   - This service owns prompt construction, retries, and rate-limit handling.
 *   - Tests MUST mock this service — no real API calls in unit/integration tests.
 *
 * Methods to be implemented in the "AiService: summarization + action-item extraction" task:
 *   - summarize(transcript: string): Promise<SummarizeResult>
 *       → constructs the prompt, calls LLM_PROVIDER (anthropic|openai), parses response
 *       → returns { summary: string, actionItems: ActionItemDto[] }
 *   - transcribeAudio(audioBuffer: Buffer): Promise<string>
 *       → sends audio to the Whisper API, returns the transcript text
 */
@Injectable()
export class AiService {
  /** Placeholder — returns a simple status object. */
  getStatus(): { status: string } {
    return { status: 'AiService ready' };
  }
}
