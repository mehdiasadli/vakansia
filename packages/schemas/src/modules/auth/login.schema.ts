import z from "zod";
import { UserSchema } from "../../db/schemas";

export const LoginInputSchema = z
	.object({
		email: UserSchema.shape.email,
		password: z.string().min(1, "Password is required"),
	})
	.required();

export type LoginInputType = z.infer<typeof LoginInputSchema>;
