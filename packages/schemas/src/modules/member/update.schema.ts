import type { z } from "zod";
import { MemberSchema } from "../../db/schemas";

export const UpdateMemberInputSchema = MemberSchema.pick({});
export const UpdateMemberOutputSchema = MemberSchema.pick({});

export type UpdateMemberInputType = z.infer<typeof UpdateMemberInputSchema>;
export type UpdateMemberOutputType = z.infer<typeof UpdateMemberOutputSchema>;
