"use client";

import { ChevronsUpDown, LogOut } from "lucide-react";
import { cn } from "../../lib/utils";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/menu";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "../ui/sidebar";
import { UserAvatar } from "../user-avatar";

export interface NavUserMenuItem {
	label: string;
	icon?: React.ReactNode;
	onClick?: () => void;
	itemProps?: React.ComponentProps<typeof DropdownMenuItem>;
	itemClassName?: string;
}

interface NavUserProps {
	user: {
		name: string;
		email: string;
		username: string;
		image?: string | null;
	};

	menuItemProps?: React.ComponentProps<typeof DropdownMenuGroup>;
	menuItemClassName?: string;
	menuItems: NavUserMenuItem[];

	logoutItemProps?: React.ComponentProps<typeof DropdownMenuItem>;
	logoutItemClassName?: string;

	onLogout: () => void;
	showLogout?: boolean;
	logoutLabel?: string;
	logoutIcon?: React.ReactNode;
}

export function NavUser({
	user,
	menuItemProps,
	menuItemClassName,
	menuItems,
	onLogout,
	logoutItemProps,
	logoutItemClassName,
	logoutLabel,
	logoutIcon,
	showLogout = true,
}: NavUserProps) {
	const { isMobile } = useSidebar();

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger
						render={
							<SidebarMenuButton
								className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
								size="lg"
							/>
						}
					>
						<UserAvatar user={user} />
						<div className="grid flex-1 text-left text-sm leading-tight">
							<span className="truncate font-medium">{user.name}</span>
							<span className="truncate text-xs">{user.email}</span>
						</div>
						<ChevronsUpDown className="ml-auto size-4" />
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<UserAvatar user={user} />
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">{user.name}</span>
									<span className="truncate text-xs">{user.email}</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							{menuItems.map((item) => {
								const resolvedClassName = cn(
									menuItemClassName,
									item.itemClassName,
								);

								const resolvedProps = {
									...menuItemProps,
									...item.itemProps,
								};

								return (
									<DropdownMenuItem
										key={item.label}
										{...resolvedProps}
										className={resolvedClassName}
									>
										{item.icon}
										{item.label}
									</DropdownMenuItem>
								);
							})}
						</DropdownMenuGroup>

						{showLogout && (
							<>
								<DropdownMenuSeparator />
								<DropdownMenuItem
									onClick={onLogout}
									variant="destructive"
									{...logoutItemProps}
									className={logoutItemClassName}
								>
									{logoutIcon ?? <LogOut />}
									{logoutLabel ?? "Log out"}
								</DropdownMenuItem>
							</>
						)}
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
