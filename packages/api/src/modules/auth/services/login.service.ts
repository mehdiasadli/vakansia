import { ORPCError } from "@orpc/client";
import { auth, BetterAuthError } from "@vakansia/auth";
import type {
	LoginInputType,
	LoginOutputType,
	UserRole,
} from "@vakansia/schemas";
import { Run } from "@vakansia/utils";
import type { ContextHeaders } from "../../../context";

export async function loginAuth(
	input: LoginInputType,
	headers: ContextHeaders
): Promise<LoginOutputType> {
	const [error, response] = await Run.try(
		auth.api.signInEmail({
			body: {
				email: input.email,
				password: input.password,
				rememberMe: input.rememberMe,
			},
			headers,
		})
	);

	if (error) {
		if (error instanceof BetterAuthError) {
			throw new ORPCError(error.name, {
				message: error.message,
				cause: error.cause,
			});
		}

		throw new ORPCError("INTERNAL_SERVER_ERROR", {
			message: "common.messages.error",
		});
	}

	return {
		redirect: response.redirect,
		url: response.url,
		token: response.token,
		user: {
			...response.user,
			role: (response.user.role ?? "user") as UserRole,
		},
	};
}
