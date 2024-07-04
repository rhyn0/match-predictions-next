import { z } from "zod";
export const MatchScoreZ = z.number().gte(0).lte(2).int();
