import "dotenv/config";
import { createEnv } from "@t3-oss/env-core";
import { DomainsObjectSchema } from "@vakansia/lib";
import { z } from "zod";

export const env = createEnv({
	server: {
		/** DATABASE */
		DATABASE_URL: z.string().min(1),
		/** AUTH */
		BETTER_AUTH_SECRET: z.string().min(32),
		BETTER_AUTH_URL: z.url(),
		/** CLOUDINARY */
		CLOUDINARY_CLOUD_NAME: z.string().min(1),
		CLOUDINARY_API_KEY: z.string().min(1),
		CLOUDINARY_API_SECRET: z.string().min(1),
		/** DOMAINS */
		DOMAINS: z
			.string()
			.transform((value) => DomainsObjectSchema.parse(JSON.parse(value))),
	},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});
