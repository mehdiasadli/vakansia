////
// GENERATES A NEW PACKAGE
////

import { exec } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { generatePackageJson } from "./helpers/generate-package-json";
import { generateSrc } from "./helpers/generate-src";
import { generateTsconfigJson } from "./helpers/generate-tsconfig-json";

interface GeneratePackageOptions {
	name: string;
	type: "ts" | "next";
}

export async function generatePackage(options: GeneratePackageOptions) {
	const { name, type } = options;

	const path = ["packages", name];

	try {
		// create folder
		const packagesDir = join(process.cwd(), "packages");
		const packageDir = join(packagesDir, name);

		await mkdir(packageDir, { recursive: true });

		const packageJsonOptions =
			type === "ts"
				? undefined
				: {
						peerDependencies: {
							react: "catalog:react",
							"react-dom": "catalog:react",
						},
						devDependencies: {
							"@types/react": "catalog:react",
							"@types/react-dom": "catalog:react",
						},
					};

		const tsconfigJsonCompilerOptions =
			type === "ts"
				? undefined
				: {
						jsx: "preserve",
						lib: ["ESNEXT", "DOM", "DOM.Iterable"],
						types: ["bun", "react", "react-dom"],
					};

		await generatePackageJson({
			packageName: name,
			packagePath: path,
			package: packageJsonOptions,
		});

		await generateTsconfigJson({
			packagePath: path,
			compilerOptions: tsconfigJsonCompilerOptions,
		});

		await generateSrc({
			packagePath: path,
		});

		console.log(`Package ${name} created successfully`);
		exec("bun install", { cwd: packageDir }).addListener("close", () => {
			console.log(`Dependencies installed for package ${name}`);
		});
	} catch (error) {
		console.error(`Error: ${error}`);
		process.exit(1);
	}
}
