import { ContactUsPayload } from "../@types";

export function checkContactUsFields(data?: ContactUsPayload) {
  const errors: string[] = [];
  const msg = "can not be null";

  if (!data) {
    errors.push("no data provided");
    throw new Error(errors.toString());
  }

  if (data.from) {
    if (data.from !== "onemedia" && data.from !== "cade") {
      errors.push("path: [from] with invalid value");
      throw new Error(errors.toString());
    }
  }

  if (!data.from) {
    errors.push(`path: [from] ${msg}`);
  }

  if (!data.email) {
    errors.push(`path: [email] ${msg}`);
  }

  if (!data.name) {
    errors.push(`path: [name] ${msg}`);
  }

  if (!data.subject) {
    errors.push(`path: [subject] ${msg}`);
  }

  if (!data.message) {
    errors.push(`path: [message] ${msg}`);
  }

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return undefined;
}
