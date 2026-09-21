import { Controller, Get } from '@nestjs/common';

/**
 * SummaryController — placeholder.
 *
 * Endpoints to be implemented across the "SummaryModule enqueues job on transcript creation",
 * "Worker writes Summary + ActionItem rows", and "List/search/detail endpoints" tasks:
 *   GET /summary/:transcriptId/status — job status polling
 *   GET /summary/:transcriptId        — full summary + action items result
 */
@Controller('summary')
export class SummaryController {
  /** Health-check route — confirms the summary router is mounted. */
  @Get('health')
  health(): { status: string } {
    return { status: 'summary module ok' };
  }
}
