import { Module } from '@nestjs/common';
import { SummaryController } from './summary.controller';
import { SummaryService } from './summary.service';

/**
 * SummaryModule — enqueues LLM summarization jobs and exposes job-status / result endpoints.
 *
 * Planned contents (added across the "SummaryModule enqueues job" and "Worker writes rows" tasks):
 *   - POST /summary/enqueue          — (internal) enqueue a job for a given transcript_id
 *   - GET  /summary/:transcriptId/status — poll job status (pending|processing|done|failed)
 *   - GET  /summary/:transcriptId        — fetch completed summary + action items
 *
 * Dependencies to be injected in later tasks:
 *   - PrismaService (read/write Summary + ActionItem rows)
 *   - Bull queue (enqueue + process summarization jobs)
 *   - AiService (the only thing that calls the LLM provider)
 */
@Module({
  controllers: [SummaryController],
  providers: [SummaryService],
  exports: [SummaryService],
})
export class SummaryModule {}
