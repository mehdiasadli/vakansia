import {
	FALLBACK_LOCALE,
	LANGUAGES,
	type Language,
	LOCALES,
	type Locale,
} from "./config";
import { messages } from "./messages";

export function isLocale(code?: unknown): code is Locale {
	return LOCALES.includes(code as Locale);
}

export function getLocale(code?: unknown): Locale {
	if (isLocale(code)) {
		return code;
	}

	return FALLBACK_LOCALE;
}

export function getLanguageByCode(code: string): Language | null {
	return LANGUAGES[code as Locale] ?? null;
}

export function getLanguageWithFallback(code: string): Language {
	return getLanguageByCode(code) ?? LANGUAGES[FALLBACK_LOCALE];
}

export function hasLanguage(code: string): boolean {
	return !!getLanguageByCode(code);
}

export function getMessages(code: string) {
	return messages[code as Locale] ?? messages[FALLBACK_LOCALE];
}

// biome-ignore lint/suspicious/noExplicitAny: we need to allow any type here
export function interpolate(template: string, params?: Record<string, any>) {
	return template.replace(/{(\w+)}/g, (match, key) =>
		params?.[key] ? String(params[key]) : match,
	);
}

export type GetLocaleKeys<T, Prefix extends string = ""> = T extends string
	? Prefix
	: {
			[K in keyof T & string]: Prefix extends ""
				? GetLocaleKeys<T[K], K>
				: GetLocaleKeys<T[K], `${Prefix}.${K}`>;
		}[keyof T & string];
