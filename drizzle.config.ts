import { env } from "@/env";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
    schema: ["./db/schema/auth/*", "./db/schema/data/*", "./db/schema/user-input/*"],
    dialect: "postgresql",
    dbCredentials: {
        url: env.SUPABASE_POOL_URI,
    },
    out: "./db/migrations",
    verbose: true,
    strict: true,
});
