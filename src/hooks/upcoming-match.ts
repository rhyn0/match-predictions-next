import db from "@/lib/drizzle-pg";
import { userPredictions } from "@db/schema/user-input/user-predictions";
import "server-only";
import type { User } from "@supabase/supabase-js";

interface getUserPredictionsArgs {
    user: User["id"];
    limit?: number;
    dateAscending?: boolean;
}
export async function getUserPredictions({
    user,
    limit = 4,
    dateAscending = true,
}: getUserPredictionsArgs) {
    const result = await db.select({ id: userPredictions.id }).from(userPredictions);
}
