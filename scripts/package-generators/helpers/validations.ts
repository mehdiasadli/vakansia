const nameRegex = /^[a-z0-9-]+$/i;

export function validateType(type?: string) {
	if (!type) {
		console.error("Type is required");
		process.exit(1);
	}

	const types = [
		"next-app",
		"expo-app",
		"server-app",
		"docs-app",
		"cli-app",
		"extension-app",
		"package",
	] as const;

	const normalizedType = types.find((t) => t === type);

	if (!normalizedType) {
		console.error("Invalid type");
		process.exit(1);
	}

	return normalizedType;
}

interface ValidationErrorOptions {
	command: string;
	title?: string;
	usage?: string;
	example?: string;
	messages?: string[];
}

export function validateName(name?: string) {
	const onError = ({
		command,
		title = "Name is required",
		usage,
		example,
		messages,
	}: ValidationErrorOptions) => {
		console.error(`\nError: ${title || "Name is required"}`);
		console.error(`Usage: ${usage || `bun run ${command} <name>`}`);
		console.error(`Example: ${example || `bun run ${command} example-name`}`);

		messages &&
			console.error(`Messages: ${messages?.join("\n") || "Name is required"}`);

		process.exit(1);
	};

	const normalizedName = name?.trim().toLowerCase();

	if (!normalizedName || normalizedName.length === 0) {
		return onError({ command: "gen-app" });
	}

	if (!nameRegex.test(normalizedName)) {
		return onError({
			command: "gen-app",
			messages: [
				"Name must contain only lowercase letters, numbers, and dashes",
			],
		});
	}

	return normalizedName;
}

export function validatePackageType(type: string, packageType?: string) {
	if (type !== "package") {
		return null;
	}

	const packageTypes = ["ts", "next"] as const;

	const normalizedPackageType = packageTypes.find((t) => t === packageType);

	if (!normalizedPackageType) {
		console.error("Invalid package type");
		process.exit(1);
	}

	return normalizedPackageType;
}
