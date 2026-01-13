import { PASSWORD_REGEX } from "@vakansia/lib";
import z from "zod";
import { UserSchema } from "../../db/schemas";

export const LoginInputSchema = z
	.object({
		email: UserSchema.shape.email,
		password: z
			.string({ error: "common.validation.string.invalid" })
			.nonempty("auth.common.fields.password.validation.required")
			.min(8, "auth.common.fields.password.validation.min")
			.max(64, "auth.common.fields.password.validation.max")
			.regex(PASSWORD_REGEX, "auth.common.fields.password.validation.regex"),
		rememberMe: z
			.boolean("auth.common.fields.rememberMe.validation.invalid")
			.default(false),
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
