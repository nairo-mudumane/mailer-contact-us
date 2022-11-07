import Fastify from "fastify";
import type { FastifyReply, FastifyRequest } from "fastify";
import type { ContactUsPayload } from "../@types";
import { checkContactUsFields } from "../resources";

export function mailerContactUs(request: FastifyRequest, replay: FastifyReply) {
  const payload = request.body as ContactUsPayload | undefined;

  try {
    checkContactUsFields(payload);
  } catch (error: Error | any) {
    return replay.code(400).send({ message: error.message });
  }

  // return replay.view("/templates/contact-us.ejs", { ...payload });
  return replay.send({ payload });
}
