import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

import { SendEmailModule } from './send-email/send-email.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    BullModule.forRoot({ redis: { host: 'redis', port: 6379 } }),
    SendEmailModule,
    UsersModule,
  ],
})
export class AppModule {}
