import { UserRoundIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export interface UserAvatarUser {
	name: string;
	username: string;
	image?: string | null;
}

interface UserAvatarProps extends React.ComponentProps<typeof Avatar> {
	user?: UserAvatarUser | null;
	initials?: string;
	fallback?: "icon" | "initials";

	iconClassName?: string;
	iconProps?: Omit<React.ComponentProps<typeof UserRoundIcon>, "className">;

	imageClassName?: string;
	imageProps?: Omit<
		React.ComponentProps<typeof AvatarImage>,
		"className" | "src"
	>;

	fallbackClassName?: string;
	fallbackProps?: Omit<
		React.ComponentProps<typeof AvatarFallback>,
		"className" | "children"
	>;

	renderIndicator?: boolean;
	indicatorClassName?: string;
	indicatorProps?: Omit<React.ComponentProps<"span">, "className" | "children">;
}

export function UserAvatar({
	user,
	initials,
	fallback = "initials",
	iconClassName,
	iconProps,
	imageClassName,
	imageProps,
	fallbackClassName,
	fallbackProps,
	renderIndicator = true,
	indicatorClassName,
	indicatorProps,
	...props
}: UserAvatarProps) {
	const Icon = (
		<UserRoundIcon
			aria-hidden="true"
			className={cn("opacity-60", iconClassName)}
			size={16}
			{...iconProps}
		/>
	);

	if (!user) {
		return (
			<Avatar {...props}>
				<AvatarFallback className={fallbackClassName} {...fallbackProps}>
					{Icon}
				</AvatarFallback>
			</Avatar>
		);
	}

	return (
		<div className="relative">
			<Avatar {...props}>
				<AvatarImage
					className={imageClassName}
					src={user.image ?? undefined}
					{...imageProps}
				/>
				<AvatarFallback className={fallbackClassName} {...fallbackProps}>
					{fallback === "initials"
						? (initials ?? getInitials(user.name))
						: Icon}
				</AvatarFallback>
			</Avatar>

			{renderIndicator && (
				<span
					className={cn(
						"absolute -end-1 -top-1 size-3 rounded-full border-2 border-background bg-emerald-500",
						indicatorClassName,
					)}
					{...indicatorProps}
				>
					<span className="sr-only">Online</span>
				</span>
			)}
		</div>
	);
}

function getInitials(name: string) {
	return (
		name
			.split(/[\s-]+/)
			.map((name) => name?.[0]?.toUpperCase() || "")
			.join("") || "U"
	);
}
