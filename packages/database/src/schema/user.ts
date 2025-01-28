import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("log", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
});

export type User = InferSelectModel<typeof users>;
export type UserInsert = InferInsertModel<typeof users>;
