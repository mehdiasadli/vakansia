import {
	ForgetPasswordInputSchema,
	ForgetPasswordOutputSchema,
	LoginInputSchema,
	LoginOutputSchema,
	RegisterInputSchema,
	RegisterOutputSchema,
	ResetPasswordInputSchema,
	ResetPasswordOutputSchema,
} from "@vakansia/schemas";
import { publicProcedure } from "../../procedures";
import {
	forgetPasswordAuth,
	registerAuth,
	resetPasswordAuth,
} from "./services";
import { loginAuth } from "./services/login.service";

export const authRouter = {
	login: publicProcedure
		.input(LoginInputSchema)
		.output(LoginOutputSchema)
		.handler(
			async ({ input, context }) => await loginAuth(input, context.headers),
		),
	register: publicProcedure
		.input(RegisterInputSchema)
		.output(RegisterOutputSchema)
		.handler(
			async ({ input, context }) => await registerAuth(input, context.headers),
		),
	forgetPassword: publicProcedure
		.input(ForgetPasswordInputSchema)
		.output(ForgetPasswordOutputSchema)
		.handler(
			async ({ input, context }) =>
				await forgetPasswordAuth(input, context.headers),
		),
	resetPassword: publicProcedure
		.input(ResetPasswordInputSchema)
		.output(ResetPasswordOutputSchema)
		.handler(
			async ({ input, context }) =>
				await resetPasswordAuth(input, context.headers),
		),
};
