import { Module } from '@nestjs/common';

import { SendEmailService } from './send-email.service';
import { SendEmailProvider } from './send-email.provider';
import { SendEmailQueueService } from './job/send-email-queue/send-email-queue.service';
import { SendEmailConsumerService } from './job/send-email-consumer/send-email-consumer.service';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [BullModule.registerQueue({ name: 'SEND_EMAIL_QUEUE' })],
  providers: [
    SendEmailService,
    SendEmailProvider,
    SendEmailQueueService,
    SendEmailConsumerService,
  ],
  exports: [SendEmailQueueService],
})
export class SendEmailModule {}
