import { AppHeader } from "@vakansia/next-ui/app-header/app-header";

export const mainNavItems = [
	{
		label: "Home",
		href: "/",
	},
];

export default function SiteLayout({ children }: LayoutProps<"/[locale]">) {
	return (
		<div>
			<AppHeader items={mainNavItems} />
			<main className="container mx-auto px-4 py-2">{children}</main>
		</div>
	);
}
