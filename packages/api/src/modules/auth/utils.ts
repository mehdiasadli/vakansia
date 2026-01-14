import prisma from "@vakansia/db";

export async function checkUsernameExists(username: string) {
	const count = await prisma.user.count({
		where: { username },
	});

	return count > 0;
}

export async function checkEmailExists(email: string) {
	const count = await prisma.user.count({
		where: { email },
	});

	return count > 0;
}
