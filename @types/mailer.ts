export interface MailerOptions {
  from: "onemedia" | "cade";
  to: string;
  subject: string;
  html: string;
}
