CREATE SCHEMA IF NOT EXISTS "auth";
--> statement-breakpoint
CREATE SCHEMA IF NOT EXISTS "data";
--> statement-breakpoint
CREATE SCHEMA IF NOT EXISTS "user_input";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auth"."users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."match_result" (
	"id" serial PRIMARY KEY NOT NULL,
	"schedule_id" integer NOT NULL,
	"score_a" integer NOT NULL,
	"score_b" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."match_schedule" (
	"id" serial PRIMARY KEY NOT NULL,
	"team_a" integer NOT NULL,
	"team_b" integer NOT NULL,
	"match_time" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "data"."teams" (
	"id" serial PRIMARY KEY NOT NULL,
	"team_name" text NOT NULL,
	"info_url" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_input"."precictions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"predicted_match" integer NOT NULL,
	"score_a" integer NOT NULL,
	"score_b" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"modified_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."match_result" ADD CONSTRAINT "match_result_schedule_id_match_schedule_id_fk" FOREIGN KEY ("schedule_id") REFERENCES "data"."match_schedule"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."match_schedule" ADD CONSTRAINT "match_schedule_team_a_teams_id_fk" FOREIGN KEY ("team_a") REFERENCES "data"."teams"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "data"."match_schedule" ADD CONSTRAINT "match_schedule_team_b_teams_id_fk" FOREIGN KEY ("team_b") REFERENCES "data"."teams"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_input"."precictions" ADD CONSTRAINT "precictions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_input"."precictions" ADD CONSTRAINT "precictions_predicted_match_match_schedule_id_fk" FOREIGN KEY ("predicted_match") REFERENCES "data"."match_schedule"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
