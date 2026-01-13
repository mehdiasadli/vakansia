import { auth } from "@vakansia/auth";
import type {
	LoginInputType,
	LoginOutputType,
	UserRole,
} from "@vakansia/schemas";
import type { ContextHeaders } from "../../../context";

export async function loginAuth(
	input: LoginInputType,
	headers: ContextHeaders
): Promise<LoginOutputType> {
	const response = await auth.api.signInEmail({
		body: {
			email: input.email,
			password: input.password,
			rememberMe: false,
		},
		headers,
	});

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
