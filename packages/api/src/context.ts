import { auth } from "@vakansia/auth";
import type { UserRole } from "@vakansia/schemas";
import type { Context as HonoContext } from "hono";
import { getLocaleFromHeaders } from "./utils";

export interface CreateContextOptions {
	context: HonoContext;
}

export async function createContext({ context }: CreateContextOptions) {
	const session = await auth.api.getSession({
		headers: context.req.raw.headers,
	});

	const locale = getLocaleFromHeaders(context.req.raw.headers);

	return {
		locale,
		headers: context.req.raw.headers,
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
export type ContextHeaders = Context["headers"];
