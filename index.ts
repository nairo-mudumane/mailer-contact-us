import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import fastifyView from "@fastify/view";
import ejs from "ejs";
import { mailerContactUs } from "./controllers";

dotenv.config();

async function appInit() {
  try {
    const server = Fastify({
      logger: true,
      requestTimeout: 600000,
    });

    await server.register(cors, {
      origin: true,
    });

    await server.register(fastifyView, {
      engine: {
        ejs,
      },
    });

    server.post("/mailer/contact-us", mailerContactUs);

    await server.listen({ port: parseInt(process.env.PORT!) });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
appInit();
