import type { z } from "zod";
import { MemberSchema } from "../../db/schemas";

export const FindManyMemberInputSchema = MemberSchema.pick({});
export const FindManyMemberOutputSchema = MemberSchema.pick({});

export type FindManyMemberInputType = z.infer<typeof FindManyMemberInputSchema>;
export type FindManyMemberOutputType = z.infer<
	typeof FindManyMemberOutputSchema
>;
