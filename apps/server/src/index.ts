import { cors } from "@elysiajs/cors";
import { node } from "@elysiajs/node";
import { auth } from "@/shared/state/auth";
import { type Context, Elysia } from "elysia";
import { db } from "@repo/database";
import { ResourceController } from "./resource/infrastructure/resource.controller";

console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`);

async function betterAuthMiddleware(context: Context) {
  return await auth.handler(context.request);
}

export const state = {
  db,
};

export const app = new Elysia({ adapter: node(), prefix: "/api" })
  .state(state)
  .use(cors())
  .all("/auth/*", betterAuthMiddleware)
  .use(ResourceController)
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
