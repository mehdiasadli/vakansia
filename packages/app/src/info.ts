export const appInfo = {
	name: "Vakansia",
	shortDescription: {
		en: "Vakansia is a platform for finding jobs and employees",
		az: "Vakansia platforması iş axtarışı və işçi axtarışı üçün platformadır",
	},
	author: "Mehdi Asadli <asadlimehdi25@gmail.com>",
	website: "https://vakansia.az",
	repository: "https://github.com/mehdiasadli/vakansia",
} as const;

export type AppInfo = typeof appInfo;
