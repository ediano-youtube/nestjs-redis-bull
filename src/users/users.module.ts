import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { SendEmailModule } from '../send-email/send-email.module';

@Module({
  imports: [SendEmailModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
