export interface MailerOptions {
  from: "onemedia" | "cade";
  to: string;
  subject: string;
  html: string;
}

export interface ContactUsMailData {
  subject: string;
  name: string;
  email: string;
  message: string;
}
