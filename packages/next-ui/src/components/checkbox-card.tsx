import { useId } from "react";
import { cn } from "../lib/utils";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

interface CheckboxCardProps extends React.ComponentProps<typeof Checkbox> {
	containerClassName?: string;
	checkboxContainerClassName?: string;
	labelContainerClassName?: string;
	labelClassName?: string;
	sublabelClassName?: string;
	descriptionClassName?: string;
	icon?: React.ReactNode;

	label?: React.ReactNode;
	sublabel?: React.ReactNode;
	description?: React.ReactNode;
}

export function CheckboxCard({
	containerClassName,
	checkboxContainerClassName,
	labelContainerClassName,
	labelClassName,
	sublabelClassName,
	descriptionClassName,
	icon,
	className,
	label,
	sublabel,
	description,
	...props
}: CheckboxCardProps) {
	const id = useId();

	return (
		<div
			className={cn(
				"relative flex w-full items-start gap-2 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50",
				containerClassName,
			)}
		>
			<Checkbox
				aria-describedby={`${id}-description`}
				className={cn("order-1 after:absolute after:inset-0", className)}
				{...props}
				id={id}
			/>
			<div
				className={cn(
					"flex grow items-center gap-3",
					checkboxContainerClassName,
				)}
			>
				{icon}
				<div className={cn("grid gap-2", labelContainerClassName)}>
					<Label className={labelClassName} htmlFor={id}>
						{label}
						{sublabel !== undefined && (
							<>
								{" "}
								<span
									className={cn(
										"font-normal text-muted-foreground text-xs leading-[inherit]",
										sublabelClassName,
									)}
								>
									{sublabel}
								</span>
							</>
						)}
					</Label>
					{description !== undefined && (
						<p
							aria-describedby={`${id}-description`}
							className={cn(
								"text-muted-foreground text-xs",
								descriptionClassName,
							)}
							id={`${id}-description`}
						>
							{description}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
