import "@vakansia/env/web";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	typedRoutes: true,
	reactCompiler: true,
};

const withNextIntl = createNextIntlPlugin(
	"../../packages/next-i18n/src/request.ts"
);

export default withNextIntl(nextConfig);
