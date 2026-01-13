import { Card } from "heroui-native";
import { Pressable, Text, View } from "react-native";

import { Container } from "@/components/container";
import { SignIn } from "@/components/sign-in";
import { SignUp } from "@/components/sign-up";
import { authClient } from "@/lib/auth-client";
import { queryClient } from "@/utils/orpc";

export default function Home() {
	const { data: session } = authClient.useSession();

	return (
		<Container className="p-6">
			<View className="mb-6 py-4">
				<Text className="mb-2 font-bold text-4xl text-foreground">
					BETTER T STACK
				</Text>
			</View>

			{session?.user ? (
				<Card className="mb-6 p-4" variant="secondary">
					<Text className="mb-2 text-base text-foreground">
						Welcome, <Text className="font-medium">{session.user.name}</Text>
					</Text>
					<Text className="mb-4 text-muted text-sm">{session.user.email}</Text>
					<Pressable
						className="self-start rounded-lg bg-danger px-4 py-3 active:opacity-70"
						onPress={() => {
							authClient.signOut();
							queryClient.invalidateQueries();
						}}
					>
						<Text className="font-medium text-foreground">Sign Out</Text>
					</Pressable>
				</Card>
			) : null}

			<Card className="p-6" variant="secondary">
				<View className="mb-4 flex-row items-center justify-between">
					<Card.Title>System Status</Card.Title>
				</View>

				<Card className="p-4">
					<View className="flex-row items-center">
						<View className="flex-1">
							<Text className="mb-1 font-medium text-foreground">
								ORPC Backend
							</Text>
						</View>
					</View>
				</Card>
			</Card>

			<Card className="mt-6 p-4" variant="secondary">
				<Card.Title className="mb-3">Private Data</Card.Title>
			</Card>

			{!session?.user && (
				<>
					<SignIn />
					<SignUp />
				</>
			)}
		</Container>
	);
}
