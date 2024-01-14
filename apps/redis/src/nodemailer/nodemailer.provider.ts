import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'alda.okon@ethereal.email',
    pass: 'vRrmC3zv9wyh3rD9CY',
  },
});

export const NodemailerProvider = {
  provide: 'NODEMAILER_PROVIDER',
  useValue: transporter,
};
