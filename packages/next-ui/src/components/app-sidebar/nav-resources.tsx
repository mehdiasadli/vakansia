"use client";

import { Link } from "@vakansia/next-i18n";
import { MoreHorizontal } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/menu";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "../ui/sidebar";

export interface NavResourceItemAction {
	label: string;
	icon?: React.ReactNode;
	onClick?: () => void;
	href?: string;
}

export interface NavResourcesItem {
	name: string;
	href: string;
	icon?: React.ReactNode;
	actions?: NavResourceItemAction[];
}

interface NavResourcesProps {
	items: NavResourcesItem[];

	title?: string;

	showMore?: boolean;
	moreLabel?: string;
	moreIcon?: React.ReactNode;
	onMoreClick?: () => void;
}

export function NavResources({
	items,
	title,
	showMore = true,
	moreLabel = "More",
	moreIcon = <MoreHorizontal />,
	onMoreClick,
}: NavResourcesProps) {
	const { isMobile } = useSidebar();

	return (
		<SidebarGroup className="group-data-[collapsible=icon]:hidden">
			{title && <SidebarGroupLabel>{title}</SidebarGroupLabel>}
			<SidebarMenu>
				{items.map((item) => (
					<SidebarMenuItem key={item.name}>
						<SidebarMenuButton render={<Link href={item.href} />}>
							{item.icon}
							<span>{item.name}</span>
						</SidebarMenuButton>
						{item.actions && item.actions.length > 0 && (
							<DropdownMenu>
								<DropdownMenuTrigger render={<SidebarMenuAction showOnHover />}>
									<MoreHorizontal />
									<span className="sr-only">More</span>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									align={isMobile ? "end" : "start"}
									className="w-48"
									side={isMobile ? "bottom" : "right"}
								>
									{item.actions.map((action) => (
										<DropdownMenuItem
											key={action.label}
											onClick={action.onClick ? action.onClick : undefined}
											render={
												action.href ? <Link href={action.href} /> : undefined
											}
										>
											{action.icon}
											<span>{action.label}</span>
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						)}
					</SidebarMenuItem>
				))}
				{showMore && (
					<SidebarMenuItem>
						<SidebarMenuButton onClick={onMoreClick}>
							{moreIcon}
							<span>{moreLabel}</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				)}
			</SidebarMenu>
		</SidebarGroup>
	);
}
