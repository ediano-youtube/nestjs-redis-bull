import {
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
  Process,
  Processor,
} from '@nestjs/bull';
import { Job } from 'bull';

import { NodemailerService } from '../../../nodemailer/nodemailer.service';

type SendEmailConsumer = {
  name: string;
  email: string;
};

@Processor('SEND_EMAIL_QUEUE')
export class SendEmailConsumerService {
  constructor(private readonly nodemailerService: NodemailerService) {}

  @Process('SEND_EMAIL_QUEUE')
  async execute({ data }: Job<SendEmailConsumer>) {
    const { email, name } = data;
    await this.nodemailerService.handler({ name, email });
  }

  @OnQueueActive()
  onActive(job: Job<SendEmailConsumer>) {
    console.log(`Ativo`, job.id);
  }

  @OnQueueFailed()
  async onQueueFailed(job: Job<SendEmailConsumer>, err: Error) {
    console.log(`Falha`, job.id, err);
  }

  @OnQueueCompleted()
  async onQueueCompleted(job: Job<SendEmailConsumer>) {
    console.log(`Completo`, job.id);
  }
}
