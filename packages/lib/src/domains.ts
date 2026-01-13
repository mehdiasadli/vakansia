import z from "zod";

export const ApplicationSchema = z.enum([
	"server",
	"web",
	"admin",
	"org",
	"auth",
	"docs",
]);

export const DomainsObjectSchema = z.object({
	server: z.url(), // apps/server
	web: z.url(), // apps/web
	admin: z.url(), // apps/admin
	org: z.url(), // apps/org
	auth: z.url(), // apps/auth
	docs: z.url(), // apps/docs
});

export type ApplicationType = z.infer<typeof ApplicationSchema>;
export type DomainsObjectType = z.infer<typeof DomainsObjectSchema>;

export const applications = ApplicationSchema.options;
