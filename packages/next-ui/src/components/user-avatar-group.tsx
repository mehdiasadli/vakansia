import { useMemo } from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { UserAvatar, type UserAvatarUser } from "./user-avatar";

interface UserAvatarGroupProps
	extends Omit<React.ComponentProps<typeof UserAvatar>, "user"> {
	users: UserAvatarUser[];

	max?: number;

	buttonProps?: Omit<
		React.ComponentProps<typeof Button>,
		"className" | "children"
	>;
	buttonClassName?: string;

	containerClassName?: string;
	avatarsContainerClassName?: string;

	showHiddenUsersButton?: boolean;
	/** @description use {{count}} placeholder for the hidden users count */
	hiddenUsersLabel?: string;
}

export function UserAvatarGroup({
	users,
	max = 3,
	className,
	buttonProps,
	buttonClassName,
	containerClassName,
	avatarsContainerClassName,
	showHiddenUsersButton = true,
	hiddenUsersLabel = "+{{count}}",
	...props
}: UserAvatarGroupProps) {
	const truncatedUsers = users.slice(0, max);
	const hiddenUsers = users.length - max;
	const hasHiddenUsers = hiddenUsers > 0;

	const formattedHiddenUsersLabel = useMemo(() => {
		return hiddenUsersLabel.replace("{{count}}", String(hiddenUsers));
	}, [hiddenUsersLabel, hiddenUsers]);

	return (
		<div
			className={cn(
				"flex items-center rounded-full bg-muted p-0.5",
				containerClassName
			)}
		>
			<div className={cn("flex -space-x-3", avatarsContainerClassName)}>
				{truncatedUsers.map((user) => (
					<UserAvatar
						key={user.username}
						user={user}
						{...props}
						className={className}
					/>
				))}
			</div>
			{hasHiddenUsers && showHiddenUsersButton && (
				<Button
					className={cn(
						"flex items-center justify-center rounded-full bg-transparent px-3 text-muted-foreground text-xs shadow-none hover:bg-transparent hover:text-foreground",
						buttonClassName
					)}
					variant="secondary"
					{...buttonProps}
				>
					{formattedHiddenUsersLabel}
				</Button>
			)}
		</div>
	);
}
