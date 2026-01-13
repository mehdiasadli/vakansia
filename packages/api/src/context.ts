import { auth } from "@vakansia/auth";
import type { UserRole } from "@vakansia/schemas";
import type { Context as HonoContext } from "hono";

export interface CreateContextOptions {
	context: HonoContext;
}

export async function createContext({ context }: CreateContextOptions) {
	const session = await auth.api.getSession({
		headers: context.req.raw.headers,
	});

	// Correctly type the `user.role` property

	return {
		session: session?.session ?? null,
		user: session?.user
			? {
					...session.user,
					role: session.user.role as UserRole,
				}
			: null,
	};
}

export type Context = Awaited<ReturnType<typeof createContext>>;
