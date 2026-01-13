import { VOEN_REGEX } from "@vakansia/lib";

export type VOENStatus =
	| "1" // indicates legal entities
	| "2"; // indicates individual entrepreneurs

export interface VOENObject {
	territory: string;
	serial: string;
	checksum: string;
	status: VOENStatus;
}

export interface ValidateVOENOptions {
	territories?: string[];
	statuses?: VOENStatus[];
}

export type ValidateVOENResult = (
	| {
			success: true;
			data: VOENObject;
	  }
	| {
			success: false;
			code: string;
	  }
) & {
	input: string;
};

export function validateVOEN(
	voen: string,
	options: ValidateVOENOptions = {}
): ValidateVOENResult {
	const { territories = [], statuses = [] } = options;

	const matches = VOEN_REGEX.exec(voen);

	if (!matches) {
		return {
			success: false,
			code: "INVALID_VOEN",
			input: voen,
		};
	}

	const { territory, serial, checksum, status } =
		matches.groups as unknown as VOENObject;

	if (territories.length > 0 && !territories.includes(territory)) {
		return {
			success: false,
			code: "INVALID_VOEN_TERRITORY",
			input: voen,
		};
	}

	if (statuses.length > 0 && !statuses.includes(status as VOENStatus)) {
		return {
			success: false,
			code: "INVALID_VOEN_STATUS",
			input: voen,
		};
	}

	return {
		success: true,
		data: { territory, serial, checksum, status },
		input: voen,
	};
}
