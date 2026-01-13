import { LoginInputSchema, LoginOutputSchema } from "@vakansia/schemas";
import { publicProcedure } from "../../procedures";
import { loginAuth } from "./services/login.service";

export const authRouter = {
	login: publicProcedure
		.input(LoginInputSchema)
		.output(LoginOutputSchema)
		.handler(
			async ({ input, context }) => await loginAuth(input, context.headers)
		),
};
