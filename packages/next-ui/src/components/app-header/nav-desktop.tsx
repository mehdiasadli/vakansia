/** biome-ignore-all lint/suspicious/noArrayIndexKey: need to use */
import { Link } from "@vakansia/next-i18n";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { LinkItem, type LinkItemGroup, type LinkItemType } from "./shared";

interface DesktopNavProps {
	items: (LinkItemType | LinkItemGroup)[];
}

function isLinkGroup(
	item: LinkItemType | LinkItemGroup
): item is LinkItemGroup {
	return "items" in item && item.items.length > 0;
}

function hasSecondaryItems(item: LinkItemGroup): boolean {
	return Boolean(item.secondaryItems && item.secondaryItems.length > 0);
}

function SimpleLinkItem({ item }: { item: LinkItemType }) {
	return (
		<NavigationMenuLink asChild className="px-4" key={`item-${item.label}`}>
			<Link className="rounded-md p-2 hover:bg-accent" href={item.href}>
				{item.icon}
				{item.label}
			</Link>
		</NavigationMenuLink>
	);
}

function MenuItemContent({ items }: { items: LinkItemType[] }) {
	return (
		<div className="space-y-2 rounded-md border bg-popover p-2 shadow">
			{items.map((link, i) => (
				<NavigationMenuLink
					asChild
					className="w-full flex-row gap-x-2"
					key={`link-${i}`}
				>
					<LinkItem {...link} />
				</NavigationMenuLink>
			))}
		</div>
	);
}

function SecondaryItemsPanel({ items }: { items: LinkItemType[] }) {
	return (
		<div className="space-y-2 p-3">
			{items.map((link, i) => (
				<NavigationMenuLink
					className="flex-row items-center gap-x-2"
					href={link.href}
					key={`secondary-${i}`}
				>
					{link.icon}
					<span className="font-medium">{link.label}</span>
				</NavigationMenuLink>
			))}
		</div>
	);
}

function DropdownMenuItem({ item }: { item: LinkItemGroup }) {
	const hasSplit = hasSecondaryItems(item);

	return (
		<NavigationMenuItem key={`item-${item.label}`}>
			<NavigationMenuTrigger className="bg-transparent">
				{item.label}
			</NavigationMenuTrigger>
			<NavigationMenuContent className="bg-muted/50 p-1 pr-1.5 pb-1.5 dark:bg-background">
				<div className={hasSplit ? "grid w-lg grid-cols-2 gap-2" : "w-lg"}>
					<MenuItemContent items={item.items} />
					{hasSplit && item.secondaryItems && (
						<SecondaryItemsPanel items={item.secondaryItems} />
					)}
				</div>
				{item.footer && <div className="p-2">{item.footer}</div>}
			</NavigationMenuContent>
		</NavigationMenuItem>
	);
}

export function DesktopNav({ items }: DesktopNavProps) {
	return (
		<NavigationMenu className="hidden md:flex">
			<NavigationMenuList>
				{items.map((item) => {
					if (!isLinkGroup(item)) {
						return <SimpleLinkItem item={item} key={item.label} />;
					}
					return <DropdownMenuItem item={item} key={item.label} />;
				})}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
