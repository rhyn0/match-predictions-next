import { pgSchema, serial, text } from "drizzle-orm/pg-core";

export const dataSchema = pgSchema("data");
export const dataTeams = dataSchema.table("teams", {
    id: serial("id").primaryKey(),
    name: text("team_name").notNull(),
    infoUrl: text("info_url"),
});
