import { Elysia } from "elysia";
import { node } from "@elysiajs/node";
import { db } from "@starter-kit/database";
import { config } from "dotenv";
import { cors } from "@elysiajs/cors";
import { auth } from "@starter-kit/auth";

config({ path: "../../.env" });

export const app = new Elysia({ adapter: node() })
  .state({
    db,
    auth,
  })
  .use(cors())
  .get("/", () => "Hello Elysia")
  .listen(
    {
      port: process.env.SERVER_PORT,
      hostname: "0.0.0.0",
    },
    ({ hostname, port }) => {
      console.log(`🦊 Elysia is running at ${hostname}:${port}`);
    },
  );

export type App = typeof app;
