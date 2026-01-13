import { FALLBACK_LOCALE, LOCALES } from "@vakansia/i18n";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: LOCALES,
	defaultLocale: FALLBACK_LOCALE,
	localePrefix: "always",
});
