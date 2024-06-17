import { integer, pgSchema, serial } from "drizzle-orm/pg-core";
import { dataSchedule } from "./schedule";

export const dataSchema = pgSchema("data");

export const dataMatchResult = dataSchema.table("match_result", {
    id: serial("id").primaryKey(),
    scheduleId: integer("schedule_id")
        .notNull()
        .references(() => dataSchedule.id),
    scoreA: integer("score_a").notNull(),
    scoreB: integer("score_b").notNull(),
});
