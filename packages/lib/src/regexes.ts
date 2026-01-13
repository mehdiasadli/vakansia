export const SLUG_REGEX = /^[a-z0-9-]+$/i;
export const USERNAME_REGEX = /^[a-z0-9_]+$/i;

export const VOEN_REGEX = /^(\d{2})(\d{6})(\d)(\d)$/;

export const PHONE_REGEXES = {
	// example: 994552001234
	az: /^994(?<operator>\d{2})(?<number>[1-9]\d{6})$/,
};
