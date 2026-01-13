import { FALLBACK_LOCALE, isLocale, type Locale } from "@vakansia/i18n";

export function getLocaleFromHeaders(headers: Headers): Locale {
	// Option 1: Check x-locale header (from client)
	const headerLocale = headers.get("x-locale");
	if (headerLocale && isLocale(headerLocale)) {
		return headerLocale;
	}

	// Option 2: Check cookie (next-intl default)
	const cookies = headers.get("cookie");

	if (cookies) {
		const localeCookie = cookies
			.split(";")
			.find((c) => c.trim().startsWith("NEXT_LOCALE="));

		if (localeCookie) {
			const locale = localeCookie.split("=")[1];
			if (isLocale(locale)) {
				return locale;
			}
		}
	}

	// Option 3: Check Accept-Language header
	const acceptLanguage = headers.get("accept-language");
	if (acceptLanguage) {
		const locale = acceptLanguage.split(",")[0]?.split("-")[0];
		if (locale && isLocale(locale)) {
			return locale;
		}
	}

	// Fallback
	return FALLBACK_LOCALE;
}
