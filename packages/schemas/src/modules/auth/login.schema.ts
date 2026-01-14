import z from "zod";
import { UserSchema } from "../../db/schemas";
import { PasswordSchema, RememberMeSchema } from "./_common.schema";

export const LoginInputSchema = z
	.object({
		email: UserSchema.shape.email,
		password: PasswordSchema,
		rememberMe: RememberMeSchema,
	})
	.required();

export const LoginOutputSchema = z.object({
	token: z.string(),
	redirect: z.boolean(),
	url: z.url().optional(),
	user: UserSchema,
});

export type LoginInputType = z.infer<typeof LoginInputSchema>;
export type LoginOutputType = z.infer<typeof LoginOutputSchema>;
