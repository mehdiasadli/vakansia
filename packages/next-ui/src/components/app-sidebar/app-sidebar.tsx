"use client";

import { Link } from "@vakansia/next-i18n";
import type * as React from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "../ui/sidebar";
import { NavMain } from "./nav-main";
import { NavResources } from "./nav-resources";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
	navUser: Omit<React.ComponentProps<typeof NavUser>, "user" | "menuItems">;
	navMain: Omit<React.ComponentProps<typeof NavMain>, "items">;
	navSecondary: Omit<React.ComponentProps<typeof NavSecondary>, "items">;
	navResources: Omit<React.ComponentProps<typeof NavResources>, "items">;

	user: React.ComponentProps<typeof NavUser>["user"];
	userItems: React.ComponentProps<typeof NavUser>["menuItems"];
	mainItems: React.ComponentProps<typeof NavMain>["items"];
	secondaryItems: React.ComponentProps<typeof NavSecondary>["items"];
	resourcesItems: React.ComponentProps<typeof NavResources>["items"];

	header: React.ReactNode;
	headerHref?: string;
}

export function AppSidebar({
	user,
	userItems,
	navMain,
	navSecondary,
	navResources,
	navUser,
	mainItems,
	secondaryItems,
	resourcesItems,
	header,
	headerHref = "/",
	...props
}: AppSidebarProps) {
	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton render={<Link href={headerHref} />} size="lg">
							{header}
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain {...navMain} items={mainItems} />
				<NavResources {...navResources} items={resourcesItems} />
				<NavSecondary
					{...navSecondary}
					className="mt-auto"
					items={secondaryItems}
				/>
			</SidebarContent>
			<SidebarFooter>
				<NavUser menuItems={userItems} user={user} {...navUser} />
			</SidebarFooter>
		</Sidebar>
	);
}

/*
<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
	<Command className="size-4" />
</div>
<div className="grid flex-1 text-left text-sm leading-tight">
	<span className="truncate font-medium">Acme Inc</span>
	<span className="truncate text-xs">Enterprise</span>
</div>              
 */
