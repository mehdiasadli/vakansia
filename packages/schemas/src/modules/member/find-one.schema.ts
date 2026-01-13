import type { z } from "zod";
import { MemberSchema } from "../../db/schemas";

export const FindOneMemberInputSchema = MemberSchema.pick({});
export const FindOneMemberOutputSchema = MemberSchema.pick({});

export type FindOneMemberInputType = z.infer<typeof FindOneMemberInputSchema>;
export type FindOneMemberOutputType = z.infer<typeof FindOneMemberOutputSchema>;
