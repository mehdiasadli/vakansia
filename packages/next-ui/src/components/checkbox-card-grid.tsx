import { useId } from "react";
import { cn } from "../lib/utils";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

export interface CheckboxCardGridItem {
	value: string;
	label?: string;
	icon?: React.ReactNode;
}

interface CheckboxCardGridProps extends React.ComponentProps<typeof Checkbox> {
	items: CheckboxCardGridItem[];

	containerClassName?: string;
	itemContainerClassName?: string;
	checkboxContainerClassName?: string;
	labelClassName?: string;
}

export function CheckboxCardGrid({
	items,
	className,
	containerClassName,
	itemContainerClassName,
	checkboxContainerClassName,
	labelClassName,
	...props
}: CheckboxCardGridProps) {
	const id = useId();

	return (
		<div className={cn("grid grid-cols-2 gap-3", containerClassName)}>
			{items.map((item) => (
				<div
					className={cn(
						"relative flex cursor-pointer flex-col gap-4 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50",
						itemContainerClassName,
					)}
					key={`${id}-${item.value}`}
				>
					<div
						className={cn(
							"flex justify-between gap-2",
							checkboxContainerClassName,
						)}
					>
						<Checkbox
							className={cn("order-1 after:absolute after:inset-0", className)}
							id={`${id}-${item.value}`}
							value={item.value}
							{...props}
						/>
						{item.icon ?? null}
					</div>
					<Label className={labelClassName} htmlFor={`${id}-${item.value}`}>
						{item.label || item.value}
					</Label>
				</div>
			))}
		</div>
	);
}
