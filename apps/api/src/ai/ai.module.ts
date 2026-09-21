import { Module } from '@nestjs/common';
import { AiService } from './ai.service';

/**
 * AiModule — wraps all interactions with LLM and Whisper providers.
 *
 * AiService is the *only* place that may call the LLM/Whisper SDK directly.
 * All other modules (SummaryModule, TranscriptsModule) must go through AiService.
 *
 * Planned contents (added in the "AiService: summarization + action-item extraction" task):
 *   - summarize(transcript: string): calls LLM API, returns { summary, actionItems }
 *   - transcribeAudio(audioBuffer: Buffer): calls Whisper API, returns raw text
 *   - Internal: retry logic + rate-limit back-off
 */
@Module({
  providers: [AiService],
  exports: [AiService],
})
export class AiModule {}
