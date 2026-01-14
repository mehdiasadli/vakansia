#!/usr/bin/env bun
import { parseArgs } from "node:util";
import { spawn } from "bun";

// Parse CLI arguments
const { values, positionals } = parseArgs({
	args: process.argv.slice(2),
	options: {
		"use-model": {
			type: "boolean",
			default: true,
		},
		methods: {
			type: "string",
		},
	},
	allowPositionals: true,
});

const name = positionals[0];

// Validate name
if (!name) {
	console.error("❌ Error: Name is required");
	console.error(
		"Usage: bun run generate:api <name> --use-model=true --methods=create,update",
	);
	process.exit(1);
}

const useModel = values["use-model"] ?? true;
const methods = values.methods;

console.log("🚀 Generating complete API (schemas + module)...");
console.log(`   Name: ${name}`);
console.log(`   Use model: ${useModel}`);
console.log(
	`   Methods: ${methods || "default (create, update, find-one, find-many, delete)"}`,
);
console.log();

// Step 1: Generate schemas
console.log("📦 Step 1/2: Generating schemas...");

const schemaArgs = [
	"run",
	"scripts/generators/generate-schema-folder.ts",
	name,
	`--use-model=${useModel}`,
];

if (methods) {
	schemaArgs.push(`--methods=${methods}`);
}

const schemaProcess = spawn(["bun", ...schemaArgs], {
	stdout: "inherit",
	stderr: "inherit",
});

const schemaExitCode = await schemaProcess.exited;

if (schemaExitCode !== 0) {
	console.error("❌ Failed to generate schemas");
	process.exit(schemaExitCode);
}

console.log();

// Step 2: Generate API module
console.log("🔧 Step 2/2: Generating API module...");

const moduleArgs = ["run", "scripts/generators/generate-module.ts", name];

if (methods) {
	moduleArgs.push(`--methods=${methods}`);
}

const moduleProcess = spawn(["bun", ...moduleArgs], {
	stdout: "inherit",
	stderr: "inherit",
});

const moduleExitCode = await moduleProcess.exited;

if (moduleExitCode !== 0) {
	console.error("❌ Failed to generate API module");
	process.exit(moduleExitCode);
}

console.log();
console.log("✨ Complete API generated successfully!");
console.log();
console.log("📝 Next steps:");
console.log(
	`   1. Fill in schemas: packages/schemas/src/modules/${name.toLowerCase().replace(/\s+/g, "-")}/*.schema.ts`,
);
console.log(
	`   2. Implement services: packages/api/src/modules/${name.toLowerCase().replace(/\s+/g, "-")}/services/*.service.ts`,
);
console.log(
	"   3. Update procedure types if needed (publicProcedure → protectedProcedure, etc.)",
);
console.log("   4. Run: bun run check");
console.log("   5. Test your API endpoints");
