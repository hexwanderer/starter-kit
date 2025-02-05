import type { Context } from "elysia";
import type { App } from "src";

export function handler({ body, store }: Context<App>) {
  store;
}
