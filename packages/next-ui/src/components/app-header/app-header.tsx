"use client";

import { useScroll } from "@vakansia/hooks";
import { Link } from "@vakansia/next-i18n";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { DesktopNav } from "./nav-desktop";
import { MobileNav } from "./nav-mobile";
import type { LinkItemGroup, LinkItemType } from "./shared";

interface AppHeaderProps {
	items: (LinkItemType | LinkItemGroup)[];
}

export function AppHeader({ items }: AppHeaderProps) {
	const scrolled = useScroll(10);

	return (
		<header
			className={cn("sticky top-0 z-50 w-full border-transparent border-b", {
				"border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50":
					scrolled,
			})}
		>
			<nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
				<div className="flex items-center gap-5">
					<Link className="rounded-md px-3 py-2.5 hover:bg-accent" href="/">
						Vakansia
					</Link>
					<DesktopNav items={items} />
				</div>
				<div className="flex items-center gap-2">
					{/* Desktop auth buttons */}
					<div className="hidden items-center gap-2 md:flex">
						<Button variant="outline">Sign In</Button>
						<Button>Get Started</Button>
					</div>
					{/* Mobile menu - wrapped to ensure it's on the right */}
					<MobileNav items={items} />
				</div>
			</nav>
		</header>
	);
}
