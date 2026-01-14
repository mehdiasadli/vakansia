import { ORPCError } from "@orpc/client";
import { auth, BetterAuthError } from "@vakansia/auth";
import type {
	RegisterInputType,
	RegisterOutputType,
	UserRole,
} from "@vakansia/schemas";
import { Run } from "@vakansia/utils";
import type { ContextHeaders } from "../../../context";
import { checkEmailExists, checkUsernameExists } from "../utils";

export async function registerAuth(
	input: RegisterInputType,
	headers: ContextHeaders,
): Promise<RegisterOutputType> {
	if (await checkUsernameExists(input.username)) {
		throw new ORPCError("BAD_REQUEST", {
			message: "models.user.errors.usernameTaken",
		});
	}

	if (await checkEmailExists(input.email)) {
		throw new ORPCError("BAD_REQUEST", {
			message: "models.user.errors.emailTaken",
		});
	}

	const [error, response] = await Run.try(
		auth.api.signUpEmail({
			body: {
				email: input.email,
				name: input.name,
				password: input.password,
				username: input.username,
				rememberMe: input.rememberMe,
			},
			headers,
		}),
	);

	if (error) {
		if (error instanceof BetterAuthError) {
			throw new ORPCError("BAD_REQUEST", {
				message: error.message,
			});
		}

		throw new ORPCError("INTERNAL_SERVER_ERROR", {
			message: "models.user.errors.createFailed",
		});
	}

	return {
		token: response.token,
		user: {
			...response.user,
			role: (response.user.role ?? "user") as UserRole,
		},
	};
}
