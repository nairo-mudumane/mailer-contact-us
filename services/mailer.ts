import nodemailer, { SendMailOptions } from "nodemailer";
import { MailerOptions } from "../@types";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  secure: true,
  port: parseInt(process.env.MAIL_PORT!),

  auth: {
    user: process.env.INFO_EMAIL,
    pass: process.env.INFO_EMAIL_PASSWORD,
  },
});

export async function sendEmail(mailConfig: MailerOptions) {
  const from =
    mailConfig.from === "cade"
      ? `[website] CADE <${process.env.INFO_EMAIL}>`
      : `[website] OneMedia SA <${process.env.INFO_EMAIL}>`;
  const to =
    mailConfig.from === "cade"
      ? ["it.onemediamoz@gmail.com", "gpro.cade@gmail.com"]
      : ["it.onemediamoz@gmail.com", "info@onemediamoz.co.mz"];

  const subject = mailConfig.subject;
  const html = mailConfig.html;

  const mailOptions: SendMailOptions = {
    from,
    to,
    subject,
    html,
  };

  return new Promise<void>((resolve, reject) => {
    return transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return reject(err);
      } else {
        return resolve();
      }
    });
  });
}
