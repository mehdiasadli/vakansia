import { auth } from "@vakansia/auth";
import type { LoginInputType } from "@vakansia/schemas";

export async function loginService(input: LoginInputType) {
	const response = await auth.api.signInEmail({
		body: {
			email: input.email,
			password: input.password,
			rememberMe: false,
		},
	});

	return {
		...response,
		user: {
			name: response.user.name,
			email: response.user.email,
			username: response.user.username,
		},
	};
}
