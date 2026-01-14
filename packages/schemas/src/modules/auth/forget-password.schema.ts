import z from "zod";
import { UserSchema } from "../../db/schemas";

export const ForgetPasswordInputSchema = z.object({
	email: UserSchema.shape.email,
});

export const ForgetPasswordOutputSchema = z.object({});

export type ForgetPasswordInputType = z.infer<typeof ForgetPasswordInputSchema>;
export type ForgetPasswordOutputType = z.infer<
	typeof ForgetPasswordOutputSchema
>;
