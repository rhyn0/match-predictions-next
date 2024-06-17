import { integer, pgSchema, serial, timestamp } from "drizzle-orm/pg-core";
import { dataTeams } from "./teams";
export const dataSchema = pgSchema("data");

export const dataSchedule = dataSchema.table("match_schedule", {
    id: serial("id").primaryKey(),
    teamA: integer("team_a")
        .notNull()
        .references(() => dataTeams.id),
    teamB: integer("team_b")
        .notNull()
        .references(() => dataTeams.id),
    matchTime: timestamp("match_time", { mode: "date", withTimezone: true }).notNull(),
});
