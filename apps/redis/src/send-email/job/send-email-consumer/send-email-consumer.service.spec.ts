import { Test, TestingModule } from '@nestjs/testing';
import { SendEmailConsumerService } from './send-email-consumer.service';

describe('SendEmailConsumerService', () => {
  let service: SendEmailConsumerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendEmailConsumerService],
    }).compile();

    service = module.get<SendEmailConsumerService>(SendEmailConsumerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
