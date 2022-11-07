export interface ContactUsPayload {
  from?: "onemedia" | "cade";
  name?: string;
  email?: string;
  message?: string;
  subject?: string;
}
