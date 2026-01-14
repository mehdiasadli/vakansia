import { cn } from "../lib/utils";
import { LoadingButton } from "./loading-button";
import { UserAvatar, type UserAvatarUser } from "./user-avatar";

interface UserButtonProps<U extends UserAvatarUser>
	extends React.ComponentProps<typeof LoadingButton> {
	children?: React.ReactNode;
	containerClassName?: string;
	user?: U | null;
	userAvatarProps?: Omit<React.ComponentProps<typeof UserAvatar>, "user">;
	renderLabel?: (user: U) => React.ReactNode;
}

export function UserButton<U extends UserAvatarUser>({
	children,
	className,
	containerClassName,
	user,
	userAvatarProps,
	renderLabel,
	...props
}: UserButtonProps<U>) {
	const label = children ?? (user ? renderLabel?.(user) : null);

	return (
		<LoadingButton
			className={cn("gap-0 rounded-full py-0 ps-0", className)}
			{...props}
		>
			<div
				className={cn(
					"me-0.5 flex aspect-square h-full p-1.5",
					containerClassName,
				)}
			>
				<UserAvatar
					imageClassName={cn(
						"h-auto w-full rounded-full",
						userAvatarProps?.imageClassName,
					)}
					user={user}
					{...userAvatarProps}
					imageProps={{
						"aria-hidden": true,
						height: 24,
						width: 24,
						...userAvatarProps?.imageProps,
					}}
				/>
			</div>
			{label}
		</LoadingButton>
	);
}
