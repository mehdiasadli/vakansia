import type { RouterClient } from "@orpc/server";

import { authRouter } from "./modules/auth/auth.router";

export const appRouter = {
	auth: authRouter,
};

export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
