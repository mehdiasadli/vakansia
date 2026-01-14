import { cn } from "../../lib/utils";

const getStateColors = (state: StatusIndicatorProps["state"]) => {
	switch (state) {
		case "active":
			return { dot: "bg-green-500", ping: "bg-green-300" };
		case "down":
			return { dot: "bg-red-500", ping: "bg-red-300" };
		case "fixing":
			return { dot: "bg-yellow-500", ping: "bg-yellow-300" };
		default:
			return { dot: "bg-slate-700", ping: "bg-slate-400" };
	}
};

const getSizeClasses = (size: StatusIndicatorProps["size"]) => {
	switch (size) {
		case "sm":
			return { dot: "h-2 w-2", ping: "h-2 w-2" };
		case "lg":
			return { dot: "h-4 w-4", ping: "h-4 w-4" };
		default:
			return { dot: "h-3 w-3", ping: "h-3 w-3" };
	}
};

interface StatusIndicatorProps {
	state: "active" | "down" | "fixing" | "idle";
	label?: string;
	className?: string;
	size?: "sm" | "md" | "lg";
	labelClassName?: string;
	animate?: boolean;
	pingClassName?: string;
}

export function StatusIndicator({
	state,
	label,
	className,
	size,
	labelClassName,
	animate = true,
	pingClassName,
}: StatusIndicatorProps) {
	const shouldAnimate = state !== "idle" && animate;
	const colors = getStateColors(state);
	const sizeClasses = getSizeClasses(size);

	const pingClasses = cn(
		"relative inline-flex rounded-full",
		sizeClasses.ping,
		colors.dot,
		pingClassName,
	);

	const animatedPingClasses = cn(
		"absolute inline-flex animate-ping rounded-full opacity-75",
		sizeClasses.ping,
		colors.dot,
		pingClassName,
	);

	return (
		<div className={cn("flex items-center gap-2", className)}>
			<div className="relative flex items-center">
				{shouldAnimate && <span className={animatedPingClasses} />}
				<span className={pingClasses} />
			</div>
			{label && (
				<p
					className={cn(
						"text-slate-700 text-sm dark:text-slate-300",
						labelClassName,
					)}
				>
					{label}
				</p>
			)}
		</div>
	);
}
