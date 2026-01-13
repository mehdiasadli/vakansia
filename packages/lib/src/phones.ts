export const PHONE_CODES = {
	az: "994",
};

export const PHONE_OPERATORS = {
	az: [
		{ operator: "Bakcell", codes: ["55", "66"] },
		{ operator: "Azercell", codes: ["50", "51"] },
		{ operator: "Nar Mobile", codes: ["70", "77"] },
		{ operator: "Naxtell", codes: ["99"] },
		{ operator: "Azteleko", codes: ["12"] },
	],
};

export const PHONE_REGEXES = {
	az: new RegExp(
		`^${PHONE_CODES.az}(?<operator>${PHONE_OPERATORS.az.map((operator) => operator.codes.join("|")).join("|")})(?<number>[1-9]\\d{6})$`,
		"g"
	),
};
