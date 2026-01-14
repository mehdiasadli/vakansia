import { PASSWORD_REGEX } from "@vakansia/lib";
import z from "zod";

export const PasswordSchema = z
	.string()
	.min(1, { error: "auth.common.fields.password.validation.required" })
	.max(64, { error: "auth.common.fields.password.validation.max" })
	.regex(PASSWORD_REGEX, {
		error: "auth.common.fields.password.validation.regex",
	});

export const ConfirmPasswordSchema = z
	.string()
	.min(1, { error: "auth.common.fields.confirmPassword.validation.required" });

export const RememberMeSchema = z
	.boolean({
		error: "auth.common.fields.rememberMe.validation.invalid",
	})
	.default(false);
