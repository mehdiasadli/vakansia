import { expoClient } from "@better-auth/expo/client";
import { oauthProviderClient } from "@better-auth/oauth-provider/client";
import type { auth } from "@vakansia/auth";
import { env } from "@vakansia/env/native";
import {
	adminClient,
	apiKeyClient,
	inferAdditionalFields,
	inferOrgAdditionalFields,
	lastLoginMethodClient,
	multiSessionClient,
	organizationClient,
	phoneNumberClient,
	twoFactorClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { expoPasskeyClient } from "expo-better-auth-passkey";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
	baseURL: env.EXPO_PUBLIC_SERVER_URL,
	plugins: [
		inferAdditionalFields<typeof auth>(),
		twoFactorClient(),
		apiKeyClient(),
		adminClient(),
		organizationClient({
			schema: inferOrgAdditionalFields<typeof auth>(),
		}),
		oauthProviderClient(),
		phoneNumberClient(),
		lastLoginMethodClient(),
		expoPasskeyClient(),
		multiSessionClient(),
		expoClient({
			scheme: Constants.expoConfig?.scheme as string,
			storagePrefix: Constants.expoConfig?.scheme as string,
			storage: SecureStore,
		}),
	],
});
