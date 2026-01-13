import type { Locale } from "@vakansia/i18n";
import { hasLocale as hasLocaleNextIntl } from "next-intl";

import { routing } from "./routing";

export function hasLocale(locale: string): locale is Locale {
	return hasLocaleNextIntl(routing.locales, locale);
}
