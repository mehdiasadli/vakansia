import type { CSSProperties } from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";

interface LoadingButtonProps extends React.ComponentProps<typeof Button> {
	isLoading?: boolean;
	classNameOnLoading?: string;
	disableOnLoading?: boolean;
	cursorOnLoading?: CSSProperties["cursor"];
	loadingText?: string;
	loadingTextClassName?: string;
	loadingIcon?: React.ReactNode;
	loadingIconPosition?: "start" | "end";
}

export function LoadingButton({
	isLoading,
	children,
	disableOnLoading = true,
	classNameOnLoading,
	loadingText,
	loadingTextClassName,
	cursorOnLoading = "not-allowed",
	loadingIcon = <Spinner />,
	loadingIconPosition = "start",
	className,
	...props
}: LoadingButtonProps) {
	const content = isLoading ? (
		<div className="flex items-center gap-2">
			{loadingIconPosition === "start" && loadingIcon}
			{loadingText && (
				<span className={cn("text-sm", loadingTextClassName)}>
					{loadingText}
				</span>
			)}
			{loadingIconPosition === "end" && loadingIcon}
		</div>
	) : (
		children
	);

	return (
		<Button
			{...props}
			className={cn(
				className,
				isLoading &&
					`${cursorOnLoading && `cursor-${cursorOnLoading}`} ${classNameOnLoading}`
			)}
			disabled={isLoading && disableOnLoading ? true : props.disabled}
		>
			{content}
		</Button>
	);
}
