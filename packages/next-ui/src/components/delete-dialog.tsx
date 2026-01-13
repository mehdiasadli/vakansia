"use client";

import { CircleAlertIcon } from "lucide-react";
import { cn } from "../lib/utils";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface DeleteDialogProps
	extends Omit<React.ComponentProps<typeof Dialog>, "children"> {
	render: React.ComponentProps<typeof DialogTrigger>["render"];
	children?: React.ReactNode;

	contentProps?: Omit<
		React.ComponentProps<typeof DialogContent>,
		"children" | "className"
	>;
	contentClassName?: string;

	formClassName?: string;
	formProps?: Omit<React.ComponentProps<"form">, "className">;

	footerProps?: React.ComponentProps<typeof DialogFooter>;
	footerClassName?: string;
}

export function DeleteDialog({
	render,
	children,
	contentProps,
	contentClassName,
	formClassName,
	formProps,
	...props
}: DeleteDialogProps) {
	return (
		<Dialog {...props}>
			<DialogTrigger render={render} />
			<DialogContent {...contentProps} className={contentClassName}>
				<form className={cn("space-y-5", formClassName)} {...formProps}>
					{children}
				</form>
			</DialogContent>
		</Dialog>
	);
}

interface DeleteDialogHeaderProps
	extends Omit<
		React.ComponentProps<typeof DialogHeader>,
		"children" | "title"
	> {
	containerClassName?: string;
	iconContainerClassName?: string;
	icon?: React.ReactNode;
	titleProps?: React.ComponentProps<typeof DialogTitle>;
	descriptionProps?: React.ComponentProps<typeof DialogDescription>;

	title?: React.ReactNode;
	children?: React.ReactNode;

	titleClassName?: string;
	descriptionClassName?: string;
}

export function DeleteDialogHeader({
	containerClassName,
	iconContainerClassName,
	icon,
	titleProps,
	descriptionProps,
	title,
	children,
	titleClassName,
	descriptionClassName,
	className,
	...props
}: DeleteDialogHeaderProps) {
	return (
		<div className={cn("flex flex-col items-center gap-2", containerClassName)}>
			<div
				aria-hidden="true"
				className={cn(
					"flex size-9 shrink-0 items-center justify-center rounded-full border",
					iconContainerClassName
				)}
			>
				{icon ?? <CircleAlertIcon className="opacity-80" size={16} />}
			</div>
			<DialogHeader {...props} className={className}>
				<DialogTitle
					className={cn("sm:text-center", titleClassName)}
					{...titleProps}
				>
					{title}
				</DialogTitle>
				<DialogDescription
					className={cn("sm:text-center", descriptionClassName)}
					{...descriptionProps}
				>
					{children}
				</DialogDescription>
			</DialogHeader>
		</div>
	);
}

interface DeleteDialogFormProps
	extends Omit<React.ComponentProps<typeof Input>, "value" | "onChange"> {
	label?: React.ReactNode;
	labelProps?: React.ComponentProps<typeof Label>;
	containerClassName?: string;
	labelClassName?: string;
}

export function DeleteDialogForm({
	label,
	labelProps,
	containerClassName,
	labelClassName,
	className,
	...props
}: DeleteDialogFormProps) {
	return (
		<div className={cn("*:not-first:mt-2", containerClassName)}>
			<Label className={labelClassName} {...labelProps}>
				{label}
			</Label>
			<Input className={className} {...props} />
		</div>
	);
}

interface DeleteDialogFooterProps
	extends Omit<React.ComponentProps<typeof DialogFooter>, "children"> {
	children?: React.ReactNode;
	showDialogClose?: boolean;

	dialogCloseClassName?: string;
	renderDialogClose?: React.ComponentProps<typeof DialogClose>["render"];
	dialogCloseProps?: Omit<
		React.ComponentProps<typeof DialogClose>,
		"className" | "render"
	>;
}

export function DeleteDialogFooter({
	children,
	className,
	showDialogClose = true,
	dialogCloseClassName,
	renderDialogClose,
	dialogCloseProps,
	...props
}: DeleteDialogFooterProps) {
	return (
		<DialogFooter className={className} {...props}>
			{showDialogClose && (
				<DialogClose
					className={cn("flex-1", dialogCloseClassName)}
					render={renderDialogClose}
					{...dialogCloseProps}
				/>
			)}
			{children}
		</DialogFooter>
	);
}
