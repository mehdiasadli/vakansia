import z from "zod";
import { UserSchema } from "../../db/schemas";

export const LoginInputSchema = z
	.object({
		email: UserSchema.shape.email,
		password: z.string().min(1, "Password is required"),
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
