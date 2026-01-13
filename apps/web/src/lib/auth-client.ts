import { oauthProviderClient } from "@better-auth/oauth-provider/client";
import { passkeyClient } from "@better-auth/passkey/client";
import type { auth } from "@vakansia/auth";
import { env } from "@vakansia/env/web";
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

export const authClient = createAuthClient({
	baseURL: env.NEXT_PUBLIC_DOMAINS.server,
	plugins: [
		inferAdditionalFields<typeof auth>(),
		twoFactorClient(),
		phoneNumberClient(),
		passkeyClient(),
		adminClient(),
		apiKeyClient(),
		organizationClient({
			schema: inferOrgAdditionalFields<typeof auth>(),
		}),
		oauthProviderClient(),
		lastLoginMethodClient(),
		multiSessionClient(),
	],
});
