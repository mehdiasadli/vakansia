import { existsSync } from "node:fs";
import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { parseArgs } from "node:util";
import { file, spawn } from "bun";
import { validateName } from "./helpers/validations";

type AppType =
	| "next" // Next.js client web application
	| "tui" // OpenTUI CLI tooling
	| "wxt" // WXT Browser Extension
	| "expo" // React Native application
	| "hono"; // Server application

const VALID_TYPES: AppType[] = ["next", "tui", "wxt", "expo", "hono"];

interface GenerateAppOptions {
	name: string;
	type: AppType;
	port?: number;
}

async function generateApp(options: GenerateAppOptions) {
	const { name, type, port } = options;

	// Paths
	const templatesDir = join(process.cwd(), "templates");
	const templateDir = join(templatesDir, type);
	const targetDir = join(process.cwd(), "apps", name);
	const rootPackageJson = join(process.cwd(), "package.json");
	const rootPackageJsonContent = await file(rootPackageJson).json();

	rootPackageJsonContent.scripts[`dev:${name}`] = `turbo -F ${name} dev`;

	await writeFile(
		rootPackageJson,
		JSON.stringify(rootPackageJsonContent, null, 2)
	);

	console.log("✅ Updated root package.json");

	// Validate template exists
	if (!existsSync(templateDir)) {
		console.error(`❌ Template not found: ${type}-app`);
		console.error(
			`Available templates: ${(await readdir(templatesDir)).join(", ")}`
		);
		process.exit(1);
	}

	// Check if target already exists
	if (existsSync(targetDir)) {
		console.error(`❌ App already exists: ${targetDir}`);
		process.exit(1);
	}

	console.log(`🚀 Generating ${type} app: ${name}`);

	// Copy template
	await mkdir(targetDir, { recursive: true });
	await cp(templateDir, targetDir, {
		recursive: true,
		filter: (src) => {
			// Skip common ignore patterns
			const filename = src.split("/").pop() || "";
			return ![
				"node_modules",
				".next",
				".turbo",
				"dist",
				"build",
				".git",
				"bun.lockb",
			].includes(filename);
		},
	});

	console.log(`✅ Copied template to ${targetDir}`);

	// Replace placeholders in package.json
	const packageJsonPath = join(targetDir, "package.json");
	if (existsSync(packageJsonPath)) {
		const packageJson = await readFile(packageJsonPath, "utf-8");
		const updated = packageJson
			.replace(/{{APP_NAME}}/g, name)
			.replace(/{{PORT}}/g, port?.toString() || "3000");

		await writeFile(packageJsonPath, updated);
		console.log("✅ Updated package.json");
	}

	// Install dependencies
	console.log("📦 Installing dependencies...");
	const installProc = spawn(["bun", "install"], {
		cwd: targetDir,
		stdout: "inherit",
		stderr: "inherit",
	});
	await installProc.exited;

	console.log("\n✨ App generated successfully!");
	console.log("\nNext steps:");
	console.log(`  cd apps/${name}`);
	console.log(`  bun dev${port ? ` # Running on port ${port}` : ""}`);
}

// Parse CLI arguments
const { values, positionals } = parseArgs({
	args: process.argv.slice(2),
	options: {
		type: {
			type: "string",
			short: "t",
		},
		port: {
			type: "string",
			short: "p",
		},
	},
	allowPositionals: true,
	strict: false,
});

// Extract name from positionals (skip the script path)
const name = positionals[0];

if (!name) {
	// First positional is the name

	console.error(
		"Usage: bun run generate:app <app-name> --type=<type> --port=<port>"
	);
	console.error(`Valid types: ${VALID_TYPES.join(", ")}`);
	process.exit(1);
}

const validatedName = validateName(name);

if (!validatedName) {
	console.error(`❌ Invalid name: ${name}`);
	process.exit(1);
}

const type = values.type;

if (!(type && VALID_TYPES.includes(type as AppType))) {
	console.error(`❌ Invalid or missing type: ${type}`);
	console.error(`Valid types: ${VALID_TYPES.join(", ")}`);
	process.exit(1);
}

const port = values.port ? Number.parseInt(String(values.port), 10) : undefined;

if (port && (Number.isNaN(port) || port < 1 || port > 65_535)) {
	console.error(`❌ Invalid port: ${values.port}`);
	process.exit(1);
}

/**
 * USAGE:
 * `bun run generate:app <app-name> <type> --port=<port>`
 */

// Generate the app
await generateApp({
	name: validatedName,
	type: type as AppType,
	port,
});
