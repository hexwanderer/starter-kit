import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

// const getEnvVariable = (name: string) => {
//   const value = process.env[name];
//   if (value == null) throw new Error(`environment variable ${name} not found`);
//   return value;
// };

const client = new Pool({
  connectionString: "",
});

export const db = drizzle(client, { schema });
