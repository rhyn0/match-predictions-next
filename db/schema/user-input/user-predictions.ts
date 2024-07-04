import { MatchScoreZ } from "@/types";
import { integer, pgSchema, serial, timestamp, uuid } from "drizzle-orm/pg-core";
import { z } from "zod";
import { authUsers } from "../auth/users";
import { dataSchedule } from "../data/schedule";

export const userInputSchema = pgSchema("user_input");
export const userPredictions = userInputSchema.table("precictions", {
    id: serial("id").primaryKey(),
    owningUser: uuid("user_id")
        .notNull()
        .references(() => authUsers.id),
    matchGuess: integer("predicted_match")
        .notNull()
        .references(() => dataSchedule.id),
    scoreA: integer("score_a").notNull(),
    scoreB: integer("score_b").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "date" })
        .notNull()
        .defaultNow(),
    modifiedAt: timestamp("modified_at", { withTimezone: true, mode: "date" })
        .notNull()
        .defaultNow()
        .$onUpdate(() => new Date()),
});
export type UserPredictionSelect = typeof userPredictions.$inferSelect;
export type InsertUserPrediction = typeof userPredictions.$inferInsert;

export const InsertUserPredictionZ = z.object({
    owningUser: z.string().uuid(),
    matchGuess: z.number().int(),
    scoreA: MatchScoreZ,
    scoreB: MatchScoreZ,
}) satisfies z.ZodType<InsertUserPrediction>;
