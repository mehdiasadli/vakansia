import { ORPCError } from "@orpc/client";
import { UserRoleSchema } from "@vakansia/schemas";
import { protectedProcedure } from "./protected.procedure";

export const adminProcedure = protectedProcedure.use(({ context, next }) => {
	const userRole = context.user?.role;

	if (!userRole) {
		throw new ORPCError("UNAUTHORIZED", {
			message: "Unauthorized",
			data: {
				code: "UNAUTHORIZED",
			},
		});
	}

	const { success } = UserRoleSchema.extract(["admin", "owner"]).safeParse(
		userRole
	);

	if (!success) {
		throw new ORPCError("FORBIDDEN", {
			message: "Forbidden",
			data: {
				code: "FORBIDDEN",
			},
		});
	}

	return next({
		context: {
			session: context.session,
		},
	});
});
