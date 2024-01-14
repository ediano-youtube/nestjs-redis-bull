import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { SendEmailService } from './send-email.service';
import { CreateSendEmailDto } from './dto/create-send-email.dto';

@Controller()
export class SendEmailController {
  constructor(private readonly sendEmailService: SendEmailService) {}

  @MessagePattern('CREATE_SEND_EMAIL')
  async sendEmail(@Payload() createSendEmailDto: CreateSendEmailDto) {
    await this.sendEmailService.sendEmail(createSendEmailDto);
  }
}
