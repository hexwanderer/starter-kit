import { cors } from "@elysiajs/cors";
import { node } from "@elysiajs/node";
import { auth } from "./auth";
import { db } from "@repo/database";
import { config } from "dotenv";
import { type Context, Elysia } from "elysia";

config({ path: "../../.env" });

console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`);

async function betterAuthMiddleware(context: Context) {
  return await auth.handler(context.request);
}

console.log(`drizzle.client is ${JSON.stringify(db.$client)}`);

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
      hostname: "127.0.0.1",
    },
    ({ hostname, port }) => {
      console.log(`🦊 Elysia is running at ${hostname}:${port}`);
    },
  );

export type App = typeof app;
