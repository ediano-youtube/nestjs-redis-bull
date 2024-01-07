import { Inject, Injectable } from '@nestjs/common';
import nodemailer, { SentMessageInfo } from 'nodemailer';

import { SendEmailProvider } from './send-email.provider';

type SendEmailHandler = {
  name: string;
  email: string;
};

@Injectable()
export class SendEmailService {
  constructor(
    @Inject(SendEmailProvider.provide)
    private readonly sendEmailProvider: nodemailer.Transporter<SentMessageInfo>,
  ) {}

  async handler({ name, email }: SendEmailHandler) {
    await this.sendEmailProvider.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>',
      to: email,
      subject: `Hello ✔ ${name}`,
      text: 'Hello world?',
      html: '<b>Hello world?</b>',
    });
  }
}
