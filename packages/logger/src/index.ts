import pino from "pino";
import {
	fileTransport,
	prettyTransport,
	standardConsoleTransport,
} from "./config";

export const logger = pino({
	level: "debug",

	redact: [
		"req.headers.authorization",
		"req.headers.cookie",
		"user.password",
		"user.newPassword",
		"user.confirmPassword",
		"user.confirmNewPassword",
	],

	transport: {
		targets: [prettyTransport, fileTransport, standardConsoleTransport],
	},
});

export type Logger = typeof logger;
