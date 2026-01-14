import { ORPCError } from "@orpc/server";
import { auth, BetterAuthError } from "@vakansia/auth";
import type {
	ForgetPasswordInputType,
	ForgetPasswordOutputType,
} from "@vakansia/schemas";
import { Run } from "@vakansia/utils";
import type { ContextHeaders } from "../../../context";

export async function forgetPasswordAuth(
	input: ForgetPasswordInputType,
	headers: ContextHeaders,
): Promise<ForgetPasswordOutputType> {
	const [error, response] = await Run.try(
		auth.api.requestPasswordReset({
			body: {
				email: input.email,
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
			message: "common.messages.error",
		});
	}

	return response;
}
