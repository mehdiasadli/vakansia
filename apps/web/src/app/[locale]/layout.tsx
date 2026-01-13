import { messages } from "@vakansia/i18n";
import { hasLocale, routing } from "@vakansia/next-i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Providers from "@/components/providers";
import "../../index.css";

export const metadata: Metadata = {
	title: "Vakansia",
	description: "Vakansia",
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children,
	params,
}: LayoutProps<"/[locale]">) {
	const { locale } = await params;

	if (!hasLocale(locale)) {
		notFound();
	}

	setRequestLocale(locale);

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className="antialiased">
				<NextIntlClientProvider messages={messages[locale]}>
					<Providers>{children}</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
