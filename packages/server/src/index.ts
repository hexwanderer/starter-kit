import { Elysia } from "elysia";
import { node } from "@elysiajs/node";
import { db } from "@starter-kit/database/handler";

const app = new Elysia({ adapter: node() })
  .state("db", db)
  .get("/", () => "Hello Elysia")
  .listen(3000, ({ hostname, port }) => {
    console.log(`🦊 Elysia is running at ${hostname}:${port}`);
  });
