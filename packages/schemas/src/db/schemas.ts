/**
 * Prisma Zod Generator - Single File (inlined)
 * Auto-generated. Do not edit.
 */

import * as z from 'zod';
// File: TransactionIsolationLevel.schema.ts

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable'])

export type TransactionIsolationLevel = z.infer<typeof TransactionIsolationLevelSchema>;

// File: AccountScalarFieldEnum.schema.ts

export const AccountScalarFieldEnumSchema = z.enum(['id', 'accountId', 'providerId', 'userId', 'accessToken', 'refreshToken', 'idToken', 'accessTokenExpiresAt', 'refreshTokenExpiresAt', 'scope', 'password', 'createdAt', 'updatedAt', 'deletedAt'])

export type AccountScalarFieldEnum = z.infer<typeof AccountScalarFieldEnumSchema>;

// File: ApikeyScalarFieldEnum.schema.ts

export const ApikeyScalarFieldEnumSchema = z.enum(['id', 'name', 'start', 'prefix', 'key', 'userId', 'refillInterval', 'refillAmount', 'lastRefillAt', 'enabled', 'rateLimitEnabled', 'rateLimitTimeWindow', 'rateLimitMax', 'requestCount', 'remaining', 'lastRequest', 'expiresAt', 'permissions', 'metadata', 'createdAt', 'updatedAt', 'deletedAt'])

export type ApikeyScalarFieldEnum = z.infer<typeof ApikeyScalarFieldEnumSchema>;

// File: InvitationScalarFieldEnum.schema.ts

export const InvitationScalarFieldEnumSchema = z.enum(['id', 'organizationId', 'email', 'role', 'status', 'expiresAt', 'inviterId', 'createdAt', 'updatedAt', 'deletedAt'])

export type InvitationScalarFieldEnum = z.infer<typeof InvitationScalarFieldEnumSchema>;

// File: JwksScalarFieldEnum.schema.ts

export const JwksScalarFieldEnumSchema = z.enum(['id', 'publicKey', 'privateKey', 'expiresAt', 'createdAt', 'updatedAt', 'deletedAt'])

export type JwksScalarFieldEnum = z.infer<typeof JwksScalarFieldEnumSchema>;

// File: MemberScalarFieldEnum.schema.ts

export const MemberScalarFieldEnumSchema = z.enum(['id', 'organizationId', 'userId', 'role', 'createdAt', 'updatedAt', 'deletedAt'])

export type MemberScalarFieldEnum = z.infer<typeof MemberScalarFieldEnumSchema>;

// File: OauthAccessTokenScalarFieldEnum.schema.ts

export const OauthAccessTokenScalarFieldEnumSchema = z.enum(['id', 'token', 'clientId', 'sessionId', 'userId', 'referenceId', 'refreshId', 'expiresAt', 'scopes', 'createdAt', 'updatedAt', 'deletedAt'])

export type OauthAccessTokenScalarFieldEnum = z.infer<typeof OauthAccessTokenScalarFieldEnumSchema>;

// File: OauthClientScalarFieldEnum.schema.ts

export const OauthClientScalarFieldEnumSchema = z.enum(['id', 'clientId', 'clientSecret', 'disabled', 'skipConsent', 'enableEndSession', 'scopes', 'userId', 'name', 'uri', 'icon', 'contacts', 'tos', 'policy', 'softwareId', 'softwareVersion', 'softwareStatement', 'redirectUris', 'postLogoutRedirectUris', 'tokenEndpointAuthMethod', 'grantTypes', 'responseTypes', 'public', 'type', 'referenceId', 'metadata', 'createdAt', 'updatedAt', 'deletedAt'])

export type OauthClientScalarFieldEnum = z.infer<typeof OauthClientScalarFieldEnumSchema>;

// File: OauthConsentScalarFieldEnum.schema.ts

export const OauthConsentScalarFieldEnumSchema = z.enum(['id', 'clientId', 'userId', 'referenceId', 'scopes', 'createdAt', 'updatedAt', 'deletedAt'])

export type OauthConsentScalarFieldEnum = z.infer<typeof OauthConsentScalarFieldEnumSchema>;

// File: OauthRefreshTokenScalarFieldEnum.schema.ts

export const OauthRefreshTokenScalarFieldEnumSchema = z.enum(['id', 'token', 'clientId', 'sessionId', 'userId', 'referenceId', 'expiresAt', 'revoked', 'scopes', 'createdAt', 'updatedAt', 'deletedAt'])

export type OauthRefreshTokenScalarFieldEnum = z.infer<typeof OauthRefreshTokenScalarFieldEnumSchema>;

// File: OrganizationScalarFieldEnum.schema.ts

export const OrganizationScalarFieldEnumSchema = z.enum(['id', 'name', 'slug', 'logo', 'metadata', 'createdAt', 'updatedAt', 'deletedAt'])

export type OrganizationScalarFieldEnum = z.infer<typeof OrganizationScalarFieldEnumSchema>;

// File: PasskeyScalarFieldEnum.schema.ts

export const PasskeyScalarFieldEnumSchema = z.enum(['id', 'name', 'publicKey', 'userId', 'credentialID', 'counter', 'deviceType', 'backedUp', 'transports', 'aaguid', 'createdAt', 'updatedAt', 'deletedAt'])

export type PasskeyScalarFieldEnum = z.infer<typeof PasskeyScalarFieldEnumSchema>;

// File: SessionScalarFieldEnum.schema.ts

export const SessionScalarFieldEnumSchema = z.enum(['id', 'expiresAt', 'token', 'ipAddress', 'userAgent', 'userId', 'impersonatedBy', 'activeOrganizationId', 'createdAt', 'updatedAt', 'deletedAt'])

export type SessionScalarFieldEnum = z.infer<typeof SessionScalarFieldEnumSchema>;

// File: TwoFactorScalarFieldEnum.schema.ts

export const TwoFactorScalarFieldEnumSchema = z.enum(['id', 'secret', 'backupCodes', 'userId', 'createdAt', 'updatedAt', 'deletedAt'])

export type TwoFactorScalarFieldEnum = z.infer<typeof TwoFactorScalarFieldEnumSchema>;

// File: UserScalarFieldEnum.schema.ts

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'emailVerified', 'image', 'twoFactorEnabled', 'phoneNumber', 'phoneNumberVerified', 'role', 'banned', 'banReason', 'banExpires', 'username', 'createdAt', 'updatedAt', 'deletedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;

// File: VerificationScalarFieldEnum.schema.ts

export const VerificationScalarFieldEnumSchema = z.enum(['id', 'identifier', 'value', 'expiresAt', 'createdAt', 'updatedAt', 'deletedAt'])

export type VerificationScalarFieldEnum = z.infer<typeof VerificationScalarFieldEnumSchema>;

// File: SortOrder.schema.ts

export const SortOrderSchema = z.enum(['asc', 'desc'])

export type SortOrder = z.infer<typeof SortOrderSchema>;

// File: NullableJsonNullValueInput.schema.ts

export const NullableJsonNullValueInputSchema = z.enum(['DbNull', 'JsonNull'])

export type NullableJsonNullValueInput = z.infer<typeof NullableJsonNullValueInputSchema>;

// File: QueryMode.schema.ts

export const QueryModeSchema = z.enum(['default', 'insensitive'])

export type QueryMode = z.infer<typeof QueryModeSchema>;

// File: NullsOrder.schema.ts

export const NullsOrderSchema = z.enum(['first', 'last'])

export type NullsOrder = z.infer<typeof NullsOrderSchema>;

// File: JsonNullValueFilter.schema.ts

export const JsonNullValueFilterSchema = z.enum(['DbNull', 'JsonNull', 'AnyNull'])

export type JsonNullValueFilter = z.infer<typeof JsonNullValueFilterSchema>;

// File: MemberRole.schema.ts

export const MemberRoleSchema = z.enum(['member', 'moderator', 'admin', 'owner'])

export type MemberRole = z.infer<typeof MemberRoleSchema>;

// File: UserRole.schema.ts

export const UserRoleSchema = z.enum(['user', 'moderator', 'admin', 'owner'])

export type UserRole = z.infer<typeof UserRoleSchema>;

// File: Account.schema.ts

export const AccountSchema = z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  userId: z.string(),
  accessToken: z.string().nullish(),
  refreshToken: z.string().nullish(),
  idToken: z.string().nullish(),
  accessTokenExpiresAt: z.date().nullish(),
  refreshTokenExpiresAt: z.date().nullish(),
  scope: z.string().nullish(),
  password: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export type AccountType = z.infer<typeof AccountSchema>;


// File: Apikey.schema.ts

export const ApikeySchema = z.object({
  id: z.string(),
  name: z.string().nullish(),
  start: z.string().nullish(),
  prefix: z.string().nullish(),
  key: z.string(),
  userId: z.string(),
  refillInterval: z.number().int().nullish(),
  refillAmount: z.number().int().nullish(),
  lastRefillAt: z.date().nullish(),
  enabled: z.boolean().default(true).nullish(),
  rateLimitEnabled: z.boolean().default(true).nullish(),
  rateLimitTimeWindow: z.number().int().default(86400000).nullish(),
  rateLimitMax: z.number().int().default(10).nullish(),
  requestCount: z.number().int().nullish(),
  remaining: z.number().int().nullish(),
  lastRequest: z.date().nullish(),
  expiresAt: z.date().nullish(),
  permissions: z.string().nullish(),
  metadata: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export type ApikeyType = z.infer<typeof ApikeySchema>;


// File: Invitation.schema.ts

export const InvitationSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  email: z.string(),
  role: z.string().nullish(),
  status: z.string().default("pending"),
  expiresAt: z.date(),
  inviterId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export type InvitationType = z.infer<typeof InvitationSchema>;


// File: Jwks.schema.ts

export const JwksSchema = z.object({
  id: z.string(),
  publicKey: z.string(),
  privateKey: z.string(),
  expiresAt: z.date().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export type JwksType = z.infer<typeof JwksSchema>;


// File: Member.schema.ts

export const MemberSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  userId: z.string(),
  role: MemberRoleSchema.default("member"),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export type MemberType = z.infer<typeof MemberSchema>;


// File: OauthAccessToken.schema.ts

export const OauthAccessTokenSchema = z.object({
  id: z.string(),
  token: z.string().nullish(),
  clientId: z.string(),
  sessionId: z.string().nullish(),
  userId: z.string().nullish(),
  referenceId: z.string().nullish(),
  refreshId: z.string().nullish(),
  expiresAt: z.date().nullish(),
  scopes: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export type OauthAccessTokenType = z.infer<typeof OauthAccessTokenSchema>;


// File: OauthClient.schema.ts

export const OauthClientSchema = z.object({
  id: z.string(),
  clientId: z.string(),
  clientSecret: z.string().nullish(),
  disabled: z.boolean(),
  skipConsent: z.boolean().nullish(),
  enableEndSession: z.boolean().nullish(),
  scopes: z.array(z.string()),
  userId: z.string().nullish(),
  name: z.string().nullish(),
  uri: z.string().nullish(),
  icon: z.string().nullish(),
  contacts: z.array(z.string()),
  tos: z.string().nullish(),
  policy: z.string().nullish(),
  softwareId: z.string().nullish(),
  softwareVersion: z.string().nullish(),
  softwareStatement: z.string().nullish(),
  redirectUris: z.array(z.string()),
  postLogoutRedirectUris: z.array(z.string()),
  tokenEndpointAuthMethod: z.string().nullish(),
  grantTypes: z.array(z.string()),
  responseTypes: z.array(z.string()),
  public: z.boolean().nullish(),
  type: z.string().nullish(),
  referenceId: z.string().nullish(),
  metadata: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export type OauthClientType = z.infer<typeof OauthClientSchema>;


// File: OauthConsent.schema.ts

export const OauthConsentSchema = z.object({
  id: z.string(),
  clientId: z.string(),
  userId: z.string().nullish(),
  referenceId: z.string().nullish(),
  scopes: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export type OauthConsentType = z.infer<typeof OauthConsentSchema>;


// File: OauthRefreshToken.schema.ts

export const OauthRefreshTokenSchema = z.object({
  id: z.string(),
  token: z.string(),
  clientId: z.string(),
  sessionId: z.string().nullish(),
  userId: z.string(),
  referenceId: z.string().nullish(),
  expiresAt: z.date().nullish(),
  revoked: z.date().nullish(),
  scopes: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export type OauthRefreshTokenType = z.infer<typeof OauthRefreshTokenSchema>;


// File: Organization.schema.ts

export const OrganizationSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  logo: z.string().nullish(),
  metadata: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export type OrganizationType = z.infer<typeof OrganizationSchema>;


// File: Passkey.schema.ts

export const PasskeySchema = z.object({
  id: z.string(),
  name: z.string().nullish(),
  publicKey: z.string(),
  userId: z.string(),
  credentialID: z.string(),
  counter: z.number().int(),
  deviceType: z.string(),
  backedUp: z.boolean(),
  transports: z.string().nullish(),
  aaguid: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export type PasskeyType = z.infer<typeof PasskeySchema>;


// File: Session.schema.ts

export const SessionSchema = z.object({
  id: z.string(),
  expiresAt: z.date(),
  token: z.string(),
  ipAddress: z.string().nullish(),
  userAgent: z.string().nullish(),
  userId: z.string(),
  impersonatedBy: z.string().nullish(),
  activeOrganizationId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export type SessionType = z.infer<typeof SessionSchema>;


// File: TwoFactor.schema.ts

export const TwoFactorSchema = z.object({
  id: z.string(),
  secret: z.string(),
  backupCodes: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export type TwoFactorType = z.infer<typeof TwoFactorSchema>;


// File: User.schema.ts

export const UserSchema = z.object({
  id: z.uuid('USER_ID_INVALID'),
  name: z.string().min(1, 'USER_NAME_MIN_LENGTH').max(50, 'USER_NAME_MAX_LENGTH'),
  email: z.email('USER_EMAIL_INVALID'),
  emailVerified: z.boolean(),
  image: z.url('USER_IMAGE_INVALID').nullish(),
  twoFactorEnabled: z.boolean().nullish(),
  phoneNumber: z.string().nullish(),
  phoneNumberVerified: z.boolean().nullish(),
  role: UserRoleSchema.default("user"),
  banned: z.boolean().nullish(),
  banReason: z.string().nullish(),
  banExpires: z.date().nullish(),
  username: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export type UserType = z.infer<typeof UserSchema>;


// File: Verification.schema.ts

export const VerificationSchema = z.object({
  id: z.string(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export type VerificationType = z.infer<typeof VerificationSchema>;

