import z from "zod";
import { UserSchema } from "../../db/schemas";
import {
	ConfirmPasswordSchema,
	PasswordSchema,
	RememberMeSchema,
} from "./_common.schema";

export const RegisterInputSchema = z
	.object({
		rememberMe: RememberMeSchema,
		password: PasswordSchema,
		confirmPassword: ConfirmPasswordSchema,
	})
	.extend(
		UserSchema.pick({
			name: true,
			email: true,
			username: true,
		}).shape,
	)
	.refine((data) => data.password === data.confirmPassword, {
		error: "auth.common.fields.confirmPassword.validation.mismatch",
		path: ["confirmPassword"],
	});

export const RegisterOutputSchema = z.object({
	token: z.string().nullable(),
	user: UserSchema,
});

export type RegisterInputType = z.infer<typeof RegisterInputSchema>;
export type RegisterOutputType = z.infer<typeof RegisterOutputSchema>;
