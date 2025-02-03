import type { User } from "@repo/database";
import type { AuthService } from "./auth";

export class TeamService {
  auth: AuthService;

  constructor(auth: AuthService) {
    this.auth = auth;
  }

  async add(name: string, user: User, headers: any) {
    const resp = await this.auth.api.hasPermission({
      body: {
        permission: {
          team: ["create"],
        },
        organizationId: "",
      },
      headers: headers,
    });
  }
}
