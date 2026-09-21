import { Test, TestingModule } from '@nestjs/testing';
import { SummaryService } from './summary.service';

describe('SummaryService', () => {
  let service: SummaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SummaryService],
    }).compile();

    service = module.get<SummaryService>(SummaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getStatus', () => {
    it('returns ready status', () => {
      expect(service.getStatus()).toEqual({ status: 'SummaryService ready' });
    });
  });
});
