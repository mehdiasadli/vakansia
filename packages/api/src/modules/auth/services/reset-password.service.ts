import { ORPCError } from "@orpc/server";
import { auth, BetterAuthError } from "@vakansia/auth";
import type {
	ResetPasswordInputType,
	ResetPasswordOutputType,
} from "@vakansia/schemas";
import { Run } from "@vakansia/utils";
import type { ContextHeaders } from "../../../context";

export async function resetPasswordAuth(
	input: ResetPasswordInputType,
	headers: ContextHeaders,
): Promise<ResetPasswordOutputType> {
	const [error, response] = await Run.try(
		auth.api.resetPassword({
			body: {
				token: input.token,
				newPassword: input.password,
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
