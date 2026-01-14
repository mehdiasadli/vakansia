import z from "zod";
import { ConfirmPasswordSchema, PasswordSchema } from "./_common.schema";

export const ResetPasswordInputSchema = z
	.object({
		token: z.string(),
		password: PasswordSchema,
		confirmPassword: ConfirmPasswordSchema,
	})
	.refine((data) => data.password === data.confirmPassword, {
		error: "auth.common.fields.confirmPassword.validation.mismatch",
		path: ["confirmPassword"],
	});

export const ResetPasswordOutputSchema = z
	.object({
		status: z.boolean(),
	})
	.nullable();

export type ResetPasswordInputType = z.infer<typeof ResetPasswordInputSchema>;
export type ResetPasswordOutputType = z.infer<typeof ResetPasswordOutputSchema>;
