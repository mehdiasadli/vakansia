export const fileTransport = {
	target: "pino-roll",
	options: {
		file: "./logs/app.log",

		frequency: "daily",
		size: "10m",
		mkdir: true,

		limit: {
			count: 14,
		},

		sync: false,
	},
};
export const prettyTransport = {
	target: "pino-pretty",

	options: {
		colorize: true,
		ignore: "pid,hostname",
		translateTime: "SYS:standard",
	},
};

export const standardConsoleTransport = {
	target: "pino/file",

	options: {
		destination: 1,
	},
};
