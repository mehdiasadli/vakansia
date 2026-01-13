import { VOEN_REGEX } from "@vakansia/lib";
import z from "zod";

export const voenSchema = z
	.string({ error: "VOEN_INVALID" })
	.regex(VOEN_REGEX, "VOEN_INVALID");
