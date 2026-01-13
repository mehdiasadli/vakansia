import type { z } from "zod";
import { MemberSchema } from "../../db/schemas";

export const CreateMemberInputSchema = MemberSchema.pick({});
export const CreateMemberOutputSchema = MemberSchema.pick({});

export type CreateMemberInputType = z.infer<typeof CreateMemberInputSchema>;
export type CreateMemberOutputType = z.infer<typeof CreateMemberOutputSchema>;
