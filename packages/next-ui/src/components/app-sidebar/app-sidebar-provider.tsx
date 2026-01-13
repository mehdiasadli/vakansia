import { cn } from "../../lib/utils";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "./app-sidebar";

interface AppSidebarProviderProps
	extends React.ComponentProps<typeof AppSidebar> {
	children: React.ReactNode;

	providerProps: React.ComponentProps<typeof SidebarProvider>;
	insetProps: React.ComponentProps<typeof SidebarInset>;

	headerClassName?: string;
	triggerContainerClassName?: string;
	triggerClassName?: string;

	mainClassName?: string;
	headerSection?: React.ReactNode;
}

export function AppSidebarProvider({
	children,

	providerProps,
	insetProps,

	headerClassName,
	triggerContainerClassName,
	triggerClassName,

	mainClassName,

	headerSection,
	...props
}: AppSidebarProviderProps) {
	return (
		<SidebarProvider {...providerProps}>
			<AppSidebar {...props} />
			<SidebarInset {...insetProps}>
				<header
					className={cn(
						"flex h-16 shrink-0 items-center gap-2",
						headerClassName
					)}
				>
					<div
						className={cn(
							"flex items-center gap-2 px-4",
							triggerContainerClassName
						)}
					>
						<SidebarTrigger className={cn("-ml-1", triggerClassName)} />
					</div>
					{headerSection}
				</header>
				<main className={mainClassName}>{children}</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
