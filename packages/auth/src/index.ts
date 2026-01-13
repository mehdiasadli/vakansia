import { expo } from "@better-auth/expo";
import { oauthProvider } from "@better-auth/oauth-provider";
// import { passkey } from "@better-auth/passkey";
import { appInfo, getCorsOrigins, getEnvironment, getUrl } from "@vakansia/app";
import prisma from "@vakansia/db";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import {
	admin,
	apiKey,
	captcha,
	haveIBeenPwned,
	jwt,
	lastLoginMethod,
	multiSession,
	openAPI,
	organization,
	phoneNumber,
	twoFactor,
} from "better-auth/plugins";

export const auth = betterAuth({
	appName: appInfo.name,
	baseURL: getUrl("server"),

	database: prismaAdapter(prisma, {
		provider: "postgresql",
	}),

	experimental: {
		joins: true,
	},

	trustedOrigins: getCorsOrigins(),

	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true,
		revokeSessionsOnPasswordReset: true,
	},

	emailVerification: {
		sendOnSignUp: true,
		autoSignInAfterVerification: true,
		async sendVerificationEmail({ user, url, token }) {
			// TODO: Implement real email sending with `resend` or `mailjet`
			// For now, we'll just log the email
			await new Promise((resolve, reject) => {
				const isSuccessful = Math.random() > 0.2;

				setTimeout(() => {
					if (isSuccessful) {
						console.log("=== === === === === ===");
						console.log(
							`Sending verification email to ${user.email} for user: ${user.name}`
						);
						console.log(`URL: ${url}`);
						console.log(`Token: ${token}`);

						console.log("=== === === === === ===");
						resolve(true);
					} else {
						console.log("=== === === === === ===");
						reject(
							new Error(
								`Failed to send verification email to ${user.email} for user: ${user.name}`
							)
						);
						console.log("=== === === === === ===");
					}
				}, 1000);
			});
		},
	},

	user: {
		additionalFields: {
			username: {
				type: "string",
				required: true,
				input: true,
				unique: true,
				fieldName: "username",
				index: true,
				returned: true,
			},
		},
	},

	advanced: {
		cookiePrefix: "vakansia",
		useSecureCookies: getEnvironment() !== "development",

		crossSubDomainCookies: {
			enabled: getEnvironment() !== "development",
			domains: getEnvironment() === "production" ? ".vakansia.az" : undefined,
		},

		defaultCookieAttributes: {
			sameSite: "none",
			secure: true,
			httpOnly: true,
		},

		database: {
			generateId: "uuid",
		},
	},
	plugins: [
		expo(),
		twoFactor({
			issuer: appInfo.name,
		}),
		phoneNumber(),
		nextCookies(),
		// passkey(),
		admin({
			allowImpersonatingAdmins: false,
		}),
		apiKey({
			defaultPrefix: "vkn_",
		}),
		organization({
			organizationLimit: 3,
			membershipLimit: 50,
			creatorRole: "owner",
			disableOrganizationDeletion: true,
			async sendInvitationEmail({
				email,
				id,
				invitation,
				inviter,
				organization,
				role,
			}) {
				await new Promise((resolve, reject) => {
					const isSuccessful = Math.random() > 0.2;

					console.log("=== === === === === ===");

					setTimeout(() => {
						if (isSuccessful) {
							console.log(
								`Sending invitation email to ${email} for user: ${inviter.user.name} (${inviter.role})`
							);
							console.log(`Invitation ID: ${id}`);
							console.log(`Invitation: ${JSON.stringify(invitation)}`);
							console.log(`Inviter: ${JSON.stringify(inviter)}`);
							console.log(`Organization: ${JSON.stringify(organization)}`);
							console.log(`Role: ${role}`);
							resolve(true);
						} else {
							reject(
								new Error(
									`Failed to send invitation email to ${email} for user: ${inviter.user.name} (${inviter.role})`
								)
							);
						}
					}, 1000);
					console.log("=== === === === === ===");
				});
			},
		}),
		haveIBeenPwned({
			paths: [
				"/auth/register",
				"/auth/reset-password",
				"/account/settings/security",
			],
		}),
		multiSession({
			maximumSessions: 5,
		}),
		lastLoginMethod(),
		openAPI(),
		jwt(),
		oauthProvider({
			loginPage: "/auth/login",
			consentPage: "/auth/consent",
		}),
		captcha({
			provider: "cloudflare-turnstile",
			secretKey: "",
			endpoints: [
				"/auth/login",
				"/auth/register",
				"/auth/forget-password",
				"/auth/reset-password",
			],
		}),
	],
});

export { APIError, BetterAuthError } from "better-auth";

/**
 * TODO: Add these plugins later:
 * Official Plugins:
 * - [ ] Device Authorization
 * - [ ] SCIM (System for Cross-domain Identity Management)
 * - [ ] SSO (Single Sign-On)
 * 3rd Party Plugins:
 * - [ ] @dymo-api/better-auth (Sign Up Protection and validation of disposable emails, IPs, and phone numbers)
 * - [ ] better-auth-localization (Localization for the auth UI and messages)
 *
 */
