import { Elysia, t } from "elysia";

export const teamService = new Elysia({ name: "teamService" })
  .put(
    "/team",
    ({ body }) => {
      console.log(body);
    },
    {
      body: t.Object({
        name: t.String(),
        description: t.String(),
      }),
    },
  )
  .patch(
    "/team",
    ({ body }) => {
      console.log(body);
    },
    {
      body: t.Object({
        name: t.String(),
        description: t.String(),
      }),
    },
  );
