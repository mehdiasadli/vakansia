import { Link } from "@vakansia/next-i18n";
import type * as React from "react";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "../ui/sidebar";

export interface NavSecondaryItem {
	title: string;
	href: string;
	icon?: React.ReactNode;
}

interface NavSecondaryProps
	extends React.ComponentPropsWithoutRef<typeof SidebarGroup> {
	items: NavSecondaryItem[];

	menuProps?: Omit<
		React.ComponentPropsWithoutRef<typeof SidebarMenu>,
		"children" | "className"
	>;
	menuClassName?: string;

	groupContentProps?: Omit<
		React.ComponentPropsWithoutRef<typeof SidebarGroupContent>,
		"children" | "className"
	>;
	groupContentClassName?: string;

	menuItemProps?: Omit<
		React.ComponentPropsWithoutRef<typeof SidebarMenuItem>,
		"children" | "className"
	>;
	menuItemClassName?: string;

	menuButtonProps?: Omit<
		React.ComponentPropsWithoutRef<typeof SidebarMenuButton>,
		"children" | "className" | "render"
	>;
	menuButtonClassName?: string;

	titleClassName?: string;
	linkProps?: Omit<React.ComponentProps<typeof Link>, "href">;
}

export function NavSecondary({
	items,
	menuProps,
	menuClassName,
	groupContentProps,
	groupContentClassName,
	menuItemProps,
	menuItemClassName,
	menuButtonProps,
	menuButtonClassName,
	titleClassName,
	linkProps,
	...props
}: NavSecondaryProps) {
	return (
		<SidebarGroup {...props}>
			<SidebarGroupContent
				{...groupContentProps}
				className={groupContentClassName}
			>
				<SidebarMenu {...menuProps} className={menuClassName}>
					{items.map((item) => (
						<SidebarMenuItem
							key={item.title}
							{...menuItemProps}
							className={menuItemClassName}
						>
							<SidebarMenuButton
								render={<Link href={item.href} {...linkProps} />}
								size="sm"
								{...menuButtonProps}
								className={menuButtonClassName}
							>
								{item.icon}
								<span className={titleClassName}>{item.title}</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
