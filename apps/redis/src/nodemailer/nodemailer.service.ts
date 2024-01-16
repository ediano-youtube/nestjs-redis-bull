import { Inject, Injectable } from '@nestjs/common';
import nodemailer, { SentMessageInfo } from 'nodemailer';
import { NodemailerProvider } from './nodemailer.provider';

type SendEmailHandler = {
  name: string;
  email: string;
};

@Injectable()
export class NodemailerService {
  constructor(
    @Inject(NodemailerProvider.provide)
    private readonly nodemailerProvider: nodemailer.Transporter<SentMessageInfo>,
  ) {}

  async handler({ name, email }: SendEmailHandler) {
    await this.nodemailerProvider.sendMail({
      from: '"Microservice Redis" <redis@email.microservice>',
      to: email,
      subject: `Hello ✔ ${name}`,
      text: 'Bem-vindo',
    });
  }
}
