#!/usr/bin/env bun

import { generatePackage } from "./generate-package";
import {
	validateName,
	validatePackageType,
	validateType,
} from "./helpers/validations";

const type = validateType(process.argv[2]);
const name = validateName(process.argv[3]);
const packageType = validatePackageType(type, process.argv[4]);

switch (type) {
	case "package":
		await generatePackage({ name, type: packageType ?? "ts" });
		break;
	default:
		console.error("Invalid type");
		process.exit(1);
}

process.exit(0);
