import z from "zod";
import { UserSchema } from "../../db/schemas";

export const ForgetPasswordInputSchema = z.object({
	email: UserSchema.shape.email,
});

export const ForgetPasswordOutputSchema = z
	.object({
		status: z.boolean(),
		message: z.string(),
	})
	.nullable();

export type ForgetPasswordInputType = z.infer<typeof ForgetPasswordInputSchema>;
export type ForgetPasswordOutputType = z.infer<
	typeof ForgetPasswordOutputSchema
>;
