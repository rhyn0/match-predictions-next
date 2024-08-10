import { env } from "@/env";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
    schema: [
        "./src/db/schema/auth/*",
        "./src/db/schema/data/*",
        "./src/db/schema/user-input/*",
    ],
    dialect: "postgresql",
    dbCredentials: {
        url: env.SUPABASE_POOL_URI,
    },
    out: "./db/migrations",
    verbose: true,
    strict: true,
});
