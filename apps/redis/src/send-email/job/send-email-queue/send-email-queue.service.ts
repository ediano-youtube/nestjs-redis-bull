import { Injectable } from '@nestjs/common';

import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

type SendEmailQueue = {
  name: string;
  email: string;
};

@Injectable()
export class SendEmailQueueService {
  constructor(@InjectQueue('SEND_EMAIL_QUEUE') private sendEmailQueue: Queue) {}

  async add({ name, email }: SendEmailQueue) {
    await this.sendEmailQueue.add('SEND_EMAIL_QUEUE', { name, email });
  }
}
