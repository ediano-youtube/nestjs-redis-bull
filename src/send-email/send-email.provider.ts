import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'pearline.ruecker76@ethereal.email',
    pass: 'gEYP8bpVTU82vwgSxg',
  },
});

export const SendEmailProvider = {
  provide: 'SEND_EMAIL_PROVIDER',
  useValue: transporter,
};
