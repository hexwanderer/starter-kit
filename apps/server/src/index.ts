import { cors } from "@elysiajs/cors";
import { node } from "@elysiajs/node";
import { auth } from "@repo/auth";
import { db } from "@repo/database";
import { config } from "dotenv";
import { type Context, Elysia } from "elysia";

config({ path: "../../.env" });

function betterAuthMiddleware(context: Context) {
  return auth.handler(context.request);
}

export const app = new Elysia({ adapter: node() })
  .state({
    db,
    auth,
  })
  .use(cors())
  .all("/api/auth/*", betterAuthMiddleware)
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
