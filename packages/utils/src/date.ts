import type { Locale } from "@vakansia/i18n";
import { format } from "date-fns";

// import { az } from "date-fns/locale";

// TODO: Add Azerbaijani locale support for date-fns
const LOCALES = {
	// az,
};

type DayFormat =
	| "d" // 1, 2, ..., 10, 11, ..., 31
	| "dd"; // 01, 02, ..., 10, 11, ..., 31

type MonthFormat =
	| "M" // 1, 2, ..., 10, 11, ..., 12
	| "Mo" // 1st, 2nd, ..., 10th, 11th, ..., 31st
	| "MM" // 01, 02, ..., 10, 11, ..., 12
	| "MMM" // Jan, Feb, ..., Oct, Nov, Dec
	| "MMMM"; // January, February, ..., October, November, December

type YearFormat =
	| "yy" // 01, 02, ..., 10, 11, ..., 98, 99
	| "yyyy"; // 0001, 0002, ..., 0010, 0011, ..., 0099

type HourFormat =
	| "H" // 0, 1, ..., 23
	| "HH"; // 00, 01, ..., 23

type MinuteFormat =
	| "m" // 0, 1, ..., 59
	| "mm"; // 00, 01, ..., 59

type SecondFormat =
	| "s" // 0, 1, ..., 59
	| "ss"; // 00, 01, ..., 59

interface CommonOptions {
	locale?: Locale;

	separator?: string;

	formatValue?: string;
}

interface FormatDateOptions extends CommonOptions {
	days?: DayFormat | "none";
	months?: MonthFormat | "none";
	years?: YearFormat | "none";
}

interface FormatTimeOptions extends CommonOptions {
	hours?: HourFormat | "none";
	minutes?: MinuteFormat | "none";
	seconds?: SecondFormat | "none";
}

function getLocaleObject(locale?: Locale) {
	return !locale || locale === "en" ? undefined : { locale: LOCALES[locale] };
}

export function formatDate(date: Date, options: FormatDateOptions = {}) {
	const {
		days = "dd",
		months = "MM",
		years = "yyyy",
		separator = ".",
		formatValue,
		locale,
	} = options;

	const values = [days, months, years].filter(
		(value): value is Exclude<DayFormat | MonthFormat | YearFormat, "none"> =>
			value !== "none",
	);

	return format(
		date,
		formatValue || values.join(separator),
		getLocaleObject(locale),
	);
}

export function formatTime(date: Date, options: FormatTimeOptions = {}) {
	const {
		hours = "HH",
		minutes = "mm",
		seconds = "ss",
		separator = ":",
		formatValue,
		locale,
	} = options;

	const values = [hours, minutes, seconds].filter(
		(
			value,
		): value is Exclude<HourFormat | MinuteFormat | SecondFormat, "none"> =>
			value !== "none",
	);

	return format(
		date,
		formatValue || values.join(separator),
		getLocaleObject(locale),
	);
}

interface FormatDateTimeOptions
	extends FormatDateOptions,
		FormatTimeOptions,
		CommonOptions {
	dateTimeSeparator?: string;
}

export function formatDateTime(
	date: Date,
	options: FormatDateTimeOptions = {},
) {
	const {
		days = "dd",
		months = "MM",
		years = "yyyy",
		separator = ".",
		hours = "HH",
		minutes = "mm",
		seconds = "ss",
		formatValue,
		dateTimeSeparator = ", ",
		locale,
	} = options;

	const dateValues = [days, months, years].filter(
		(value): value is Exclude<DayFormat | MonthFormat | YearFormat, "none"> =>
			value !== "none",
	);

	const timeValues = [hours, minutes, seconds].filter(
		(
			value,
		): value is Exclude<HourFormat | MinuteFormat | SecondFormat, "none"> =>
			value !== "none",
	);

	return format(
		date,
		formatValue ||
			`${dateValues.join(separator)}${dateTimeSeparator}${timeValues.join(separator)}`,
		getLocaleObject(locale),
	);
}
