import { INVALID_ORGANIZATION_SLUGS, SLUG_REGEX } from "@vakansia/lib";
import z from "zod";

export const slugSchema = z
	.string({
		error: "ORGANIZATION_SLUG_INVALID",
	})
	.trim()
	.toLowerCase()
	.min(3, "ORGANIZATION_SLUG_TOO_SHORT")
	.max(50, "ORGANIZATION_SLUG_TOO_LONG")
	.regex(SLUG_REGEX, "ORGANIZATION_SLUG_INVALID")
	.refine(
		(slug) => !INVALID_ORGANIZATION_SLUGS.some((regex) => regex.test(slug)),
		"ORGANIZATION_SLUG_RESERVED"
	);
