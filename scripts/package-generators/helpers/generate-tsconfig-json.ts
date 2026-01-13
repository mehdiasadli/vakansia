////
// GENERATES THE TSCONFIG.JSON FILE FOR THE NEW APP/PACKAGE
////

import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";

interface GenerateTsconfigJsonOptions {
	packagePath: string[]; // example: ["apps", "server"]
	onExistsMessage?: string | ((tsconfigJsonPath: string) => string);
	// biome-ignore lint/suspicious/noExplicitAny: any is used to allow for any compiler options
	compilerOptions?: Partial<Record<string, any>>;
}

export async function generateTsconfigJson(
	options: GenerateTsconfigJsonOptions
) {
	const { packagePath, onExistsMessage, compilerOptions } = options;

	if (!packagePath.length) {
		console.error("Package path is required to generate tsconfig.json file");
		process.exit(1);
	}

	const tsconfigJsonPath = join(process.cwd(), ...packagePath, "tsconfig.json");

	if (existsSync(tsconfigJsonPath)) {
		if (typeof onExistsMessage === "string") {
			console.error(onExistsMessage);
		} else if (typeof onExistsMessage === "function") {
			console.error(onExistsMessage(tsconfigJsonPath));
		} else {
			console.error(
				`\`tsconfig.json\` file already exists: ${tsconfigJsonPath}`
			);
		}
		process.exit(1);
	}

	const tsconfigJson = {
		extends: "@vakansia/config/tsconfig.base.json",
		compilerOptions: {
			declaration: true,
			declarationMap: true,
			sourceMap: true,
			outDir: "dist",
			composite: true,
			strictNullChecks: true,
			...compilerOptions,
		},
	};

	await writeFile(tsconfigJsonPath, JSON.stringify(tsconfigJson, null, 2));

	console.log(`Tsconfig.json file created: ${tsconfigJsonPath}`);
}
