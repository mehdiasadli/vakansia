import type { RouterClient } from "@orpc/server";

import { authRouter } from "./modules/auth/auth.router";
import { memberRouter } from "./modules/member/member.router";

export const appRouter = {
	auth: authRouter,
	member: memberRouter,
};

export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
