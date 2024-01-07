import { Module } from '@nestjs/common';

import { SendEmailModule } from './send-email/send-email.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [SendEmailModule, UsersModule],
})
export class AppModule {}
