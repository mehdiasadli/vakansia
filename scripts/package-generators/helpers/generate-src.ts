////
// GENERATES THE SRC FOLDER FOR THE NEW APP/PACKAGE
////

import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

interface GenerateSrcOptions {
	packagePath: string[]; // example: ["apps", "server"]
	srcFolderName?: string;
	onExistsMessage?: string | ((srcDir: string) => string);
	mainFileName?: string;
	mainFileExtension?: string;
	mainFileContent?: string;
	successMessage?: string | ((srcDir: string) => string);
}

export async function generateSrc(options: GenerateSrcOptions) {
	const {
		packagePath,
		srcFolderName = "src",
		mainFileName = "index",
		mainFileContent = "export {};",
		mainFileExtension = "ts",
		onExistsMessage,
		successMessage,
	} = options;

	if (!packagePath.length) {
		console.error("Package path is required to generate source directory");
		process.exit(1);
	}

	const srcDir = join(process.cwd(), ...packagePath, srcFolderName);

	if (existsSync(srcDir)) {
		if (typeof onExistsMessage === "string") {
			console.error(onExistsMessage);
		} else if (typeof onExistsMessage === "function") {
			console.error(onExistsMessage(srcDir));
		} else {
			console.error(`Source directory already exists: ${srcDir}`);
		}

		process.exit(1);
	}

	await mkdir(srcDir, { recursive: true });
	const normalizedMainFileName = `${mainFileName}.${mainFileExtension}`;
	await writeFile(join(srcDir, normalizedMainFileName), mainFileContent);

	if (typeof successMessage === "string") {
		console.log(successMessage);
	} else if (typeof successMessage === "function") {
		console.log(successMessage(srcDir));
	} else {
		console.log(`Source directory created: ${srcDir}`);
	}
}
