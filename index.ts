import Fastify from "fastify";
import cors from "@fastify/cors";
// import AppRoutes from "./routes";

async function appInit() {
  try {
    const server = Fastify({
      logger: true,
      requestTimeout: 600000,
    });

    await server.register(cors, {
      origin: true,
    });

    server.get("/mailer/contact-us", (request, reply) => {
      return reply.code(200).send({ ok: true });
    });

    await server.listen({ port: 3333 });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
appInit();
