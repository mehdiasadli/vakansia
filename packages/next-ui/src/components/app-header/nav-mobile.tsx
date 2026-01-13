/** biome-ignore-all lint/suspicious/noArrayIndexKey: need to use */
import { useMediaQuery } from "@vakansia/hooks";
import { MenuIcon, XIcon } from "lucide-react";
import React from "react";
import { createPortal } from "react-dom";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { LinkItem, type LinkItemGroup, type LinkItemType } from "./shared";

interface MobileNavProps {
	items: (LinkItemType | LinkItemGroup)[];
}

function isLinkGroup(
	item: LinkItemType | LinkItemGroup
): item is LinkItemGroup {
	return "items" in item && item.items.length > 0;
}

function MenuToggleButton({
	open,
	onClick,
}: {
	open: boolean;
	onClick: () => void;
}) {
	return (
		<Button
			aria-controls="mobile-menu"
			aria-expanded={open}
			aria-label="Toggle menu"
			className="md:hidden"
			onClick={onClick}
			size="icon"
			variant="outline"
		>
			<div
				className={cn(
					"transition-all",
					open ? "scale-100 opacity-100" : "scale-0 opacity-0"
				)}
			>
				<XIcon aria-hidden="true" className="size-4.5" />
			</div>
			<div
				className={cn(
					"absolute transition-all",
					open ? "scale-0 opacity-0" : "scale-100 opacity-100"
				)}
			>
				<MenuIcon aria-hidden="true" className="size-4.5" />
			</div>
		</Button>
	);
}

function MenuGroup({ item }: { item: LinkItemGroup }) {
	return (
		<div className="flex flex-col gap-y-2" key={`group-${item.label}`}>
			<span className="font-medium text-muted-foreground text-sm">
				{item.label}
			</span>
			{item.items.map((link, i) => (
				<LinkItem key={`link-${i}`} {...link} />
			))}
			{item.secondaryItems && item.secondaryItems.length > 0 && (
				<>
					<div className="my-2 h-px bg-border" />
					{item.secondaryItems.map((link, i) => (
						<LinkItem key={`secondary-${i}`} {...link} />
					))}
				</>
			)}
		</div>
	);
}

function SimpleLink({ item }: { item: LinkItemType }) {
	return <LinkItem key={`link-${item.label}`} {...item} />;
}

function MobileMenuContent({
	items,
}: {
	items: (LinkItemType | LinkItemGroup)[];
}) {
	return (
		<div className="flex w-full flex-col gap-y-4">
			{items.map((item, index) => {
				if (isLinkGroup(item)) {
					return <MenuGroup item={item} key={`item-${index}`} />;
				}
				return <SimpleLink item={item} key={`item-${index}`} />;
			})}
		</div>
	);
}

function MobileMenuActions() {
	return (
		<div className="mt-5 flex flex-col gap-2 border-t pt-4">
			<Button className="w-full" variant="outline">
				Sign In
			</Button>
			<Button className="w-full">Get Started</Button>
		</div>
	);
}

function MobileMenuOverlay({
	open,
	items,
}: {
	open: boolean;
	items: (LinkItemType | LinkItemGroup)[];
}) {
	if (!open) return null;

	return createPortal(
		<div
			className={cn(
				"bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50",
				"fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t md:hidden"
			)}
			id="mobile-menu"
		>
			<div
				className={cn(
					"data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
					"size-full overflow-y-auto overflow-x-hidden p-4"
				)}
				data-slot={open ? "open" : "closed"}
			>
				<MobileMenuContent items={items} />
				<MobileMenuActions />
			</div>
		</div>,
		document.body
	);
}

function useBodyScrollLock(open: boolean, isMobile: boolean) {
	React.useEffect(() => {
		if (open && isMobile) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [open, isMobile]);
}

export function MobileNav({ items }: MobileNavProps) {
	const [open, setOpen] = React.useState(false);
	const { isMobile } = useMediaQuery();

	useBodyScrollLock(open, isMobile);

	return (
		<>
			<MenuToggleButton onClick={() => setOpen(!open)} open={open} />
			<MobileMenuOverlay items={items} open={open} />
		</>
	);
}
