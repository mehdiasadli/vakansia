import { Link } from "@vakansia/next-i18n";
import { cn } from "../../lib/utils";

export interface LinkItemType {
	label: string;
	href: string;
	icon?: React.ReactNode;
	description?: string;
}

export type LinkItemGroup = Omit<LinkItemType, "description"> & {
	items: LinkItemType[];
	secondaryItems?: LinkItemType[];
	footer?: React.ReactNode;
};

interface LinkItemProps
	extends LinkItemType,
		Omit<React.ComponentProps<typeof Link>, "href"> {
	iconContainerClassName?: string;
	contentContainerClassName?: string;
	labelClassName?: string;
	descriptionClassName?: string;
}

export function LinkItem({
	label,
	description,
	icon,
	className,
	href,
	iconContainerClassName,
	contentContainerClassName,
	labelClassName,
	descriptionClassName,
	...props
}: LinkItemProps) {
	return (
		<Link
			className={cn("flex gap-x-2 rounded-md p-2 hover:bg-accent", className)}
			href={href}
			{...props}
		>
			<div
				className={cn(
					"flex aspect-square size-12 items-center justify-center rounded-md border bg-card text-sm shadow-sm",
					iconContainerClassName,
				)}
			>
				{icon}
			</div>
			<div
				className={cn(
					"flex flex-col items-start justify-center",
					contentContainerClassName,
				)}
			>
				<span className={cn("font-medium", labelClassName)}>{label}</span>
				<span
					className={cn(
						"line-clamp-2 text-muted-foreground text-xs",
						descriptionClassName,
					)}
				>
					{description}
				</span>
			</div>
		</Link>
	);
}
