import { Test, TestingModule } from '@nestjs/testing';
import { SendEmailQueueService } from './send-email-queue.service';

describe('SendEmailQueueService', () => {
  let service: SendEmailQueueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendEmailQueueService],
    }).compile();

    service = module.get<SendEmailQueueService>(SendEmailQueueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
