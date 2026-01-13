import type { GetLocaleKeys } from "../utils";

export const en = {
	common: {
		home: {
			welcome: "Welcome to the home page!",
		},
	},
};

export type LocaleKeys = GetLocaleKeys<typeof en>;
