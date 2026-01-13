const environments = ["development", "production", "test"] as const;
const apps = [
	"web",
	"docs",
	"native",
	"admin",
	"organization",
	"server",
	"native-organization",
	"native-admin",
] as const;

export type APP_ENV = (typeof environments)[number];
export type APP_NAME = (typeof apps)[number];

export function getEnvironment(): APP_ENV {
	const nodeEnv =
		process.env.NODE_ENV ??
		process.env.EXPO_PUBLIC_ENV ??
		process.env.NEXT_PUBLIC_ENV ??
		"development";

	if (nodeEnv === "test") {
		return "test";
	}

	if (nodeEnv === "production") {
		return "production";
	}

	return "development";
}

const urlConfig = {
	development: {
		server: "http://localhost:3000",

		web: "http://localhost:3001",
		admin: "http://localhost:3002",
		organization: "http://localhost:3003",
		docs: "http://localhost:3004",

		native: "vakansia-development://",
		"native-organization": "vakansia-organization-development://",
		"native-admin": "vakansia-admin-development://",
	},
	test: {
		server: "https://test.api.vakansia.az",

		web: "https://test.vakansia.az",
		admin: "https://test.admin.vakansia.az",
		organization: "https://test.organization.vakansia.az",
		docs: "https://test.docs.vakansia.az",

		native: "vakansia-test://",
		"native-organization": "vakansia-organization-test://",
		"native-admin": "vakansia-admin-test://",
	},
	production: {
		server: "https://api.vakansia.az",

		web: "https://vakansia.az",
		admin: "https://admin.vakansia.az",
		organization: "https://organization.vakansia.az",
		docs: "https://docs.vakansia.az",

		native: "vakansia://",
		"native-organization": "vakansia-organization://",
		"native-admin": "vakansia-admin://",
	},
} as const satisfies {
	[env in APP_ENV]: Record<APP_NAME, string>;
};

export type UrlConfig = typeof urlConfig.production;

/**
 * Get all URLs for current environment
 */
export function getURLs(): UrlConfig {
	const environment = getEnvironment();
	const result = urlConfig[environment];

	if (!isUrlConfig(result)) {
		throw new Error(`Invalid url config for environment: ${environment}`);
	}

	return result;
}

/**
 * Get a specific URL for current environment
 */
export function getUrl<T extends APP_NAME>(app: T): UrlConfig[T] {
	const environment = getEnvironment();
	const urls = urlConfig[environment];

	if (!isUrlConfig(urls)) {
		throw new Error(`Invalid url config for environment: ${environment}`);
	}

	return urls[app];
}

/**
 * Build a full URL with path
 */
export function buildUrl<T extends APP_NAME>(app: T, path = ""): string {
	const base = getUrl(app);

	// Handle deep links differently (no path joining with //)
	if (base.includes("://") && !base.startsWith("http")) {
		// Deep link scheme
		return path ? `${base}${path}` : base;
	}

	// HTTP URL
	if (!path) {
		return base;
	}

	const cleanPath = path.startsWith("/") ? path : `/${path}`;
	return `${base}${cleanPath}`;
}

/**
 * Get CORS origins for server configuration
 */
export function getCorsOrigins(): string[] {
	const urls = getURLs();

	return [urls.web, urls.admin, urls.organization, urls.docs];
}

/**
 * GUARDS
 */
export function isEnvironment(value: unknown): value is APP_ENV {
	return environments.includes(value as APP_ENV);
}

export function isAppName(value: unknown): value is APP_NAME {
	return apps.includes(value as APP_NAME);
}

export function isUrlConfig(value: unknown): value is UrlConfig {
	if (value === null || typeof value !== "object") {
		return false;
	}

	const entries = Object.entries(value);

	for (const [appName, url] of entries) {
		if (!isAppName(appName)) {
			return false;
		}

		if (typeof url !== "string") {
			return false;
		}
	}

	return true;
}
