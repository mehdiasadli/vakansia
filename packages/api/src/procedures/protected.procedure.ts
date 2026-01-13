import { ORPCError } from "@orpc/client";
import { publicProcedure } from "./public.procedure";

export const protectedProcedure = publicProcedure.use(({ context, next }) => {
	if (!context.user) {
		throw new ORPCError("UNAUTHORIZED", {
			message: "Unauthorized",
			data: {
				code: "UNAUTHORIZED",
			},
		});
	}

	return next({
		context: {
			session: context.session,
		},
	});
});
