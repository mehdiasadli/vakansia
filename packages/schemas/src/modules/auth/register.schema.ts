import z from "zod";
import { UserSchema } from "../../db/schemas";

export const RegisterInputSchema = z
	.object({
		rememberMe: z.boolean().optional(),
		password: z.string().min(1, "Password is required"),
		confirmPassword: z.string().min(1, "Confirm password is required"),
	})
	.extend(
		UserSchema.pick({
			name: true,
			email: true,
			username: true,
		}).shape
	)
	.refine((data) => data.password === data.confirmPassword, {
		error: "AUTH_PASSWORD_MISMATCH",
		path: ["confirmPassword"],
	});

export type RegisterInputType = z.infer<typeof RegisterInputSchema>;
