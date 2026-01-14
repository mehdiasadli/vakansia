import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { LoadingButton } from "./loading-button";

interface DirectionButtonProps
	extends Omit<React.ComponentProps<typeof LoadingButton>, "children"> {
	children?: React.ReactNode;
	direction: "prev" | "next";
	icons?: {
		prev?: React.ReactNode;
		next?: React.ReactNode;
	};
	iconClassName?: string;
	paddingInline?: number;
	iconContainerClassName?: string;
	positionValue: number;
}

export function DirectionButton({
	direction,
	className,
	children,
	icons,
	iconClassName,
	paddingInline = 12,
	iconContainerClassName,
	positionValue = 0,
	...props
}: DirectionButtonProps) {
	const icon =
		direction === "prev"
			? icons?.prev || (
					<ChevronLeftIcon
						aria-hidden="true"
						className={cn("opacity-60", iconClassName)}
						size={16}
					/>
				)
			: icons?.next || (
					<ChevronRightIcon
						aria-hidden="true"
						className={cn("opacity-60", iconClassName)}
						size={16}
					/>
				);

	const renderedChildren =
		children ?? (direction === "prev" ? "Previous" : "Next");

	const paddingInlineClassName =
		direction === "prev" ? `ps-${paddingInline}` : `pe-${paddingInline}`;

	const positionValueClassName =
		direction === "prev" ? `start-${positionValue}` : `end-${positionValue}`;

	return (
		<LoadingButton
			className={cn("relative", className, paddingInlineClassName)}
			{...props}
		>
			{renderedChildren}
			<span
				className={cn(
					"pointer-events-none absolute inset-y-0 flex w-9 items-center justify-center bg-primary-foreground/15",
					iconContainerClassName,
					positionValueClassName,
				)}
			>
				{icon}
			</span>
		</LoadingButton>
	);
}
