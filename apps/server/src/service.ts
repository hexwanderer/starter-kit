import type { User } from "@repo/database";
import type { AuthService } from "./auth";
import { Elysia } from "elysia";
import type { InferHandler } from "elysia";
import type { app } from "src";

type GetTeamHandler = InferHandler<
  typeof app,
  "/api/team/:teamId",
  {
    params: {
      teamId: string;
    };
    response: {
      200: string;
    };
  }
>;

const getTeam: GetTeamHandler = ({ params, store }) => {
  const { teamId } = params;
  return {
    200: teamId,
  };
};

export const teamService = new Elysia({ name: "teamService" }).get(
  "/",
  getTeam,
);
