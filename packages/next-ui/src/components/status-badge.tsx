import { cn } from "../lib/utils";
import { Badge } from "./ui/badge";

interface StatusBadgeProps extends React.ComponentProps<typeof Badge> {
	indicatorClassName?: string;
	indicatorProps?: Omit<React.ComponentProps<"span">, "className">;
	// override the color of the indicator (e.g. red-100)
	color?: `${string}-${number}`;
}

export function StatusBadge({
	variant = "default",
	className,
	children,
	indicatorClassName,
	indicatorProps,
	color,
	...props
}: StatusBadgeProps) {
	const colorMap: Record<NonNullable<typeof variant>, string> = {
		// status indicator variants
		warning: "bg-orange-500",
		success: "bg-green-500",
		info: "bg-blue-500",
		error: "bg-red-500",
		// others
		default: "inherit",
		destructive: "inherit",
		outline: "inherit",
		secondary: "inherit",
	};

	return (
		<Badge className={cn("gap-1.5", className)} variant={variant} {...props}>
			<span
				aria-hidden="true"
				{...indicatorProps}
				className={cn(
					"size-1.5 rounded-full",
					colorMap[variant ?? "default"],
					color ? `bg-${color}` : "",
					indicatorClassName,
				)}
			/>
			{children}
		</Badge>
	);
}
