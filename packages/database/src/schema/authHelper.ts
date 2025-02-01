import type { InferSelectModel } from "drizzle-orm";
import type { organization, session, user } from "./auth";

export type Organization = InferSelectModel<typeof organization>;
export type OrganizationInsert = InferSelectModel<typeof organization>;

export type User = InferSelectModel<typeof user>;
export type UserInsert = InferSelectModel<typeof user>;

export type Session = InferSelectModel<typeof session>;
export type SessionInsert = InferSelectModel<typeof session>;
