import Fastify from "fastify";
import cors from "@fastify/cors";

async function appInit() {
  const app = Fastify({
    logger: true,
    requestTimeout: 600000,
  });

  await app.register(cors, {
    origin: true,
  });

  await app.listen({ port: 3333 });
}
appInit();
