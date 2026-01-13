////
// GENERATES THE PACKAGE.JSON FILE FOR THE NEW APP/PACKAGE
////

import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";

interface Package {
	name: string;
	version: string;
	private: boolean;
	type: "module" | "commonjs";
	exports?: Record<string, string>;
	dependencies?: Record<string, string>;
	devDependencies?: Record<string, string>;
	peerDependencies?: Record<string, string>;
	scripts?: Record<string, string>;
}

interface GeneratePackageJsonOptions {
	packageName: string;
	packagePath: string[]; // example: ["apps", "server"]
	package?: Partial<Package>;
	onExistsMessage?: string | ((packageJsonPath: string) => string);
}

const defaultDevDependencies = {
	"@vakansia/config": "workspace:*",
};

const defaultDependencies = {
	"@vakansia/app": "workspace:*",
	"@vakansia/env": "workspace:*",
	"@vakansia/schemas": "workspace:*",
};

const defaultPeerDependencies = {
	typescript: "catalog:",
};

const defaultScripts = {
	check: "biome check --write .",
	"check-types": "turbo check-types",
};

export async function generatePackageJson(options: GeneratePackageJsonOptions) {
	const {
		packageName,
		packagePath,
		package: packageOptions,
		onExistsMessage,
	} = options;
	const {
		name = `@vakansia/${packageName}`,
		version = "0.0.0",
		private: isPrivate = true,
		type = "module",
		exports = {
			".": "./src/index.ts",
			"./*": "./src/*.ts",
		},
		devDependencies = {},
		dependencies = {},
		peerDependencies = {},
		scripts = {},
	} = packageOptions ?? {};

	if (!packagePath.length) {
		console.error("Package path is required to generate package.json file");
		process.exit(1);
	}

	const packageJsonPath = join(process.cwd(), ...packagePath, "package.json");

	if (existsSync(packageJsonPath)) {
		if (typeof onExistsMessage === "string") {
			console.error(onExistsMessage);
		} else if (typeof onExistsMessage === "function") {
			console.error(onExistsMessage(packageJsonPath));
		} else {
			console.error(`\`package.json\` file already exists: ${packageJsonPath}`);
		}

		process.exit(1);
	}

	const packageJson: Package = {
		name,
		version,
		private: isPrivate,
		type,
		exports,
		devDependencies: {
			...defaultDevDependencies,
			...devDependencies,
		},
		dependencies: {
			...defaultDependencies,
			...dependencies,
		},
		peerDependencies: {
			...defaultPeerDependencies,
			...peerDependencies,
		},
		scripts: {
			...defaultScripts,
			...scripts,
		},
	};

	await writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));

	console.log(`Package.json file created: ${packageJsonPath}`);
}
