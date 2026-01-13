////
// I18N CONFIG
////

export const LOCALES = ["en", "az"] as const;
export const FALLBACK_LOCALE = "en";

export type Locale = (typeof LOCALES)[number];

export interface Language {
	name: string;
	nativeName: string;
	code: Locale;
	direction: "ltr" | "rtl";
	flag: string;
	countryCode2: string;
	countryCode3: string;
	isFallback: boolean;
}

export const LANGUAGES: Record<Locale, Language> = {
	en: {
		name: "English",
		nativeName: "English",
		code: "en",
		direction: "ltr",
		flag: "🇬🇧",
		isFallback: true,
		countryCode2: "GB",
		countryCode3: "GBR",
	},
	az: {
		name: "Azerbaijani",
		nativeName: "Azərbaycanca",
		code: "az",
		direction: "ltr",
		flag: "🇦🇿",
		isFallback: false,
		countryCode2: "AZ",
		countryCode3: "AZE",
	},
};

export const HIDE_LOCALE_PREFIX = "never";
