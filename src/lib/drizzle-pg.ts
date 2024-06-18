import { env } from "@/env";
import schema from "@db/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const pgClient = postgres(env.SUPABASE_POOL_URI, {
    prepare: false,
});
const db = drizzle(pgClient, { schema });
export default db;
