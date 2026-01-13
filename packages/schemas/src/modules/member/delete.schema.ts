import type { z } from "zod";
import { MemberSchema } from "../../db/schemas";

export const DeleteMemberInputSchema = MemberSchema.pick({});
export const DeleteMemberOutputSchema = MemberSchema.pick({});

export type DeleteMemberInputType = z.infer<typeof DeleteMemberInputSchema>;
export type DeleteMemberOutputType = z.infer<typeof DeleteMemberOutputSchema>;
