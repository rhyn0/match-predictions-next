"use server";

import { userPredictions } from "@/db/schema/user-input/user-predictions";
import db from "@/lib/drizzle-pg";
import type { MatchPrediction } from "@/types";
import { eq } from "drizzle-orm";

export async function getUserPredictions(userId: string): Promise<MatchPrediction[]> {
    const results = await db
        .select({
            id: userPredictions.id,
            scoreA: userPredictions.scoreA,
            scoreB: userPredictions.scoreB,
            match: userPredictions.matchGuess,
        })
        .from(userPredictions)
        .where(eq(userPredictions.owningUser, userId))
        .limit(10);
    return results;
}
