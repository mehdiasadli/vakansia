import z from "zod";
import { ConfirmPasswordSchema, PasswordSchema } from "./_common.schema";

export const ResetPasswordInputSchema = z.object({
	token: z.string(),
	password: PasswordSchema,
	confirmPassword: ConfirmPasswordSchema,
});

export const ResetPasswordOutputSchema = z.object({});

export type ResetPasswordInputType = z.infer<typeof ResetPasswordInputSchema>;
export type ResetPasswordOutputType = z.infer<typeof ResetPasswordOutputSchema>;
