"use client";

import { Link } from "@vakansia/next-i18n";
import { ChevronRight } from "lucide-react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "../ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "../ui/sidebar";

interface NavMainItem {
	title: string;
	href: string;
	icon?: React.ReactNode;
	isActive?: boolean;
	items?: Pick<NavMainItem, "title" | "href">[];
}

interface NavMainProps {
	items: NavMainItem[];

	title?: string;
}

export function NavMain({ items, title }: NavMainProps) {
	return (
		<SidebarGroup>
			{title && <SidebarGroupLabel>{title}</SidebarGroupLabel>}
			<SidebarMenu>
				{items.map((item) => (
					<Collapsible
						defaultOpen={item.isActive}
						key={item.title}
						render={<SidebarMenuItem />}
					>
						<SidebarMenuItem>
							<SidebarMenuButton
								render={<Link href={item.href} />}
								tooltip={item.title}
							>
								{item.icon}
								<span>{item.title}</span>
							</SidebarMenuButton>
							{item.items?.length ? (
								<>
									<CollapsibleTrigger
										render={
											<SidebarMenuAction className="data-[state=open]:rotate-90" />
										}
									>
										<ChevronRight />
										<span className="sr-only">Toggle</span>
									</CollapsibleTrigger>
									<CollapsibleContent>
										<SidebarMenuSub>
											{item.items?.map((subItem) => (
												<SidebarMenuSubItem key={subItem.title}>
													<SidebarMenuSubButton
														render={<Link href={subItem.href} />}
													>
														<span>{subItem.title}</span>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
											))}
										</SidebarMenuSub>
									</CollapsibleContent>
								</>
							) : null}
						</SidebarMenuItem>
					</Collapsible>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
