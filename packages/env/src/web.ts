import { createEnv } from "@t3-oss/env-nextjs";
import { DomainsObjectSchema } from "@vakansia/lib";
import { z } from "zod";

export const env = createEnv({
	client: {
		NEXT_PUBLIC_DOMAINS: z
			.string()
			.transform((value) => DomainsObjectSchema.parse(JSON.parse(value))),
	},
	runtimeEnv: {
		NEXT_PUBLIC_DOMAINS: process.env.NEXT_PUBLIC_DOMAINS,
	},
	emptyStringAsUndefined: true,
});
