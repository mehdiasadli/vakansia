"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { LoadingButton } from "./loading-button";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "./ui/menu";

interface DropdownButtonOption {
	label: string;
	description: string;
}

interface DropdownButtonProps
	extends Omit<React.ComponentProps<typeof LoadingButton>, "children"> {
	options: DropdownButtonOption[];

	containerClassName?: string;

	menuProps?: Omit<
		React.ComponentProps<typeof DropdownMenuContent>,
		"children" | "className"
	>;

	menuTriggerProps?: Omit<
		React.ComponentProps<typeof DropdownMenuTrigger>,
		"children" | "className" | "render"
	>;
	menuTriggerClassName?: string;

	menuButtonProps?: Omit<
		React.ComponentProps<typeof Button>,
		"className" | "children"
	>;
	menuButtonClassName?: string;
	menuButtonRender?: React.ReactNode;

	menuContentProps?: Omit<
		React.ComponentProps<typeof DropdownMenuContent>,
		"children" | "className"
	>;
	menuContentClassName?: string;

	menuRadioGroupProps?: Omit<
		React.ComponentProps<typeof DropdownMenuRadioGroup>,
		"children" | "className"
	>;
	menuRadioGroupClassName?: string;

	menuRadioItemProps?: Omit<
		React.ComponentProps<typeof DropdownMenuRadioItem>,
		"children" | "className"
	>;
	menuRadioItemClassName?: string;

	renderMenuItem?: (
		option: DropdownButtonOption,
		isSelected: boolean,
		index: number
	) => React.ReactNode;

	menuItemContainerClassName?: string;
	labelClassName?: string;
	descriptionClassName?: string;
}

export function DropdownButton({
	options,
	className,
	containerClassName,
	menuProps,
	menuTriggerProps,
	menuTriggerClassName,
	menuButtonProps,
	menuButtonClassName,
	menuButtonRender,
	menuContentProps,
	menuContentClassName,
	menuRadioGroupProps,
	menuRadioGroupClassName,
	menuRadioItemProps,
	menuRadioItemClassName,
	renderMenuItem,
	menuItemContainerClassName,
	labelClassName,
	descriptionClassName,
	...props
}: DropdownButtonProps) {
	const [selectedIndex, setSelectedIndex] = useState<`${number}`>(`${0}`);

	return (
		<div
			className={cn(
				"inline-flex divide-x divide-primary-foreground/30 rounded-md shadow-xs rtl:space-x-reverse",
				containerClassName
			)}
		>
			<LoadingButton
				className={cn(
					"rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10",
					className
				)}
				{...props}
			>
				{options[selectedIndex]?.label}
			</LoadingButton>
			<DropdownMenu {...menuProps}>
				<DropdownMenuTrigger
					{...menuTriggerProps}
					className={cn(
						"rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10",
						menuTriggerClassName
					)}
					render={
						<Button
							aria-label="Options"
							className={cn(
								"rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10",
								menuButtonClassName
							)}
							{...menuButtonProps}
							size="icon"
						/>
					}
				>
					{menuButtonRender ?? <ChevronDownIcon aria-hidden="true" size={16} />}
				</DropdownMenuTrigger>
				<DropdownMenuContent
					align="end"
					className={cn("max-w-64 md:max-w-xs", menuContentClassName)}
					side="bottom"
					sideOffset={4}
					{...menuContentProps}
				>
					<DropdownMenuRadioGroup
						{...menuRadioGroupProps}
						className={cn("flex flex-col gap-1", menuRadioGroupClassName)}
						onValueChange={setSelectedIndex}
						value={selectedIndex}
					>
						{options.map((option, index) => (
							<DropdownMenuRadioItem
								className={cn(
									"items-start [&>span]:pt-1.5",
									menuRadioItemClassName
								)}
								{...menuRadioItemProps}
								key={option.label}
								value={String(index)}
							>
								<div
									className={cn(
										"flex flex-col gap-1",
										menuItemContainerClassName
									)}
								>
									{renderMenuItem ? (
										renderMenuItem(
											option,
											String(index) === selectedIndex,
											index
										)
									) : (
										<>
											<span
												className={cn("font-medium text-sm", labelClassName)}
											>
												{option.label}
											</span>
											<span
												className={cn(
													"text-muted-foreground text-xs",
													descriptionClassName
												)}
											>
												{option.description}
											</span>
										</>
									)}
								</div>
							</DropdownMenuRadioItem>
						))}
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
