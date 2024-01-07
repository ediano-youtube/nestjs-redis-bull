import { Module } from '@nestjs/common';

import { SendEmailService } from './send-email.service';
import { SendEmailProvider } from './send-email.provider';

@Module({
  providers: [SendEmailService, SendEmailProvider],
  exports: [SendEmailService],
})
export class SendEmailModule {}
