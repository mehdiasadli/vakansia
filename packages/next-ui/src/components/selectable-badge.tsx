import { CheckIcon } from "lucide-react";
import { useId } from "react";
import { cn } from "../lib/utils";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";

interface SelectableBadgeProps extends React.ComponentProps<typeof Badge> {
	labelClassName?: string;

	checkboxProps?: Omit<
		React.ComponentProps<typeof Checkbox>,
		"className" | "id"
	>;
	checkboxClassName?: string;

	renderCheckIcon?: boolean;
	checkIconClassName?: string;
	checkIconProps?: Omit<React.ComponentProps<typeof CheckIcon>, "className">;
}

export function SelectableBadge({
	children,
	className,
	labelClassName,
	checkboxProps,
	checkboxClassName,
	renderCheckIcon = true,
	checkIconClassName,
	checkIconProps,
	...props
}: SelectableBadgeProps) {
	const id = useId();

	return (
		<Badge
			{...props}
			className={cn(
				"relative outline-none has-focus-visible:border-ring has-data-[state=unchecked]:bg-muted has-data-[state=unchecked]:text-muted-foreground has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50",
				className
			)}
		>
			<Checkbox
				className={cn(
					"peer sr-only after:absolute after:inset-0",
					checkboxClassName
				)}
				{...checkboxProps}
				defaultChecked
				id={id}
			/>
			{renderCheckIcon && (
				<CheckIcon
					aria-hidden="true"
					className={cn(
						"hidden peer-data-[state=checked]:block",
						checkIconClassName
					)}
					{...checkIconProps}
					size={12}
				/>
			)}
			<label
				className={cn(
					"cursor-pointer select-none after:absolute after:inset-0",
					labelClassName
				)}
				htmlFor={id}
			>
				{children}
			</label>
		</Badge>
	);
}
