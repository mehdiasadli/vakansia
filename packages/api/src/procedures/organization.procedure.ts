import { ORPCError } from "@orpc/client";
import prisma from "@vakansia/db";
import type { MemberRole } from "@vakansia/schemas";
import { protectedProcedure } from "./protected.procedure";

export const organizationProcedure = protectedProcedure.use(
	async ({ context, next }) => {
		const { session, user } = context;

		if (!(session && user)) {
			throw new ORPCError("UNAUTHORIZED", {
				message: "Unauthorized",
				data: {
					code: "UNAUTHORIZED",
				},
			});
		}

		if (!session.activeOrganizationId) {
			throw new ORPCError("NOT_FOUND", {
				message: "Active organization not found",
				data: {
					code: "NOT_FOUND",
				},
			});
		}

		const activeOrganization = await prisma.organization.findUnique({
			where: {
				id: session.activeOrganizationId,
			},
			select: {
				name: true,
				slug: true,
				members: {
					take: 1,
					where: { userId: user.id },
				},
			},
		});

		if (!activeOrganization) {
			throw new ORPCError("NOT_FOUND", {
				message: "Active organization not found",
				data: {
					code: "NOT_FOUND",
				},
			});
		}

		const [member] = activeOrganization.members;

		if (!member) {
			throw new ORPCError("NOT_FOUND", {
				message: "Member not found",
				data: {
					code: "NOT_FOUND",
				},
			});
		}

		return next({
			context: {
				...context,
				organization: {
					name: activeOrganization.name,
					slug: activeOrganization.slug,
					role: member.role as MemberRole,
				},
			},
		});
	}
);
