import type { GetLocaleKeys } from "../utils";

export const en = {
	// ============================================================================
	// COMMON - Shared across all apps
	// ============================================================================
	common: {
		actions: {
			save: "Save",
			cancel: "Cancel",
			delete: "Delete",
			edit: "Edit",
			create: "Create",
			update: "Update",
			submit: "Submit",
			confirm: "Confirm",
			back: "Back",
			next: "Next",
			previous: "Previous",
			close: "Close",
			search: "Search",
			filter: "Filter",
			sort: "Sort",
			export: "Export",
			import: "Import",
			download: "Download",
			upload: "Upload",
			copy: "Copy",
			share: "Share",
			viewDetails: "View Details",
			learnMore: "Learn More",
		},
		status: {
			active: "Active",
			inactive: "Inactive",
			pending: "Pending",
			approved: "Approved",
			rejected: "Rejected",
			draft: "Draft",
			published: "Published",
			archived: "Archived",
			deleted: "Deleted",
		},
		messages: {
			loading: "Loading...",
			saving: "Saving...",
			success: "Success!",
			error: "An error occurred",
			noResults: "No results found",
			noData: "No data available",
			confirmDelete: "Are you sure you want to delete this?",
			unsavedChanges: "You have unsaved changes",
		},
		validation: {
			// Common validation messages, which are not tied to a specific field
			required: "This field is required",
			invalid: "This value is invalid",
			string: {
				invalid: "This value is not a valid string",
				min: "Must be at least {min} characters",
				max: "Cannot exceed {max} characters",
				regex: "Invalid pattern",
				nonempty: "This value cannot be empty",
				uuid: "Invalid ID",
				startsWith: "Must start with {startsWith}",
				endsWith: "Must end with {endsWith}",
				includes: "Must include {includes}",
				email: "Invalid email address",
				url: "Invalid URL",
				ipv4: "Invalid IP address",
				ipv6: "Invalid IP address",
				slug: "Invalid slug format",
			},
			number: {
				invalid: "This value is not a valid number",
				min: "Must be at least {min}",
				max: "Must be at most {max}",
				integer: "Must be an integer",
				positive: "Must be a positive number",
				negative: "Must be a negative number",
				nonNegative: "Must be a non-negative number",
				nonPositive: "Must be a non-positive number",
				multipleOf: "Must be a multiple of {multipleOf}",
				lt: "Must be less than {lt}",
				lte: "Must be less than or equal to {lte}",
				gt: "Must be greater than {gt}",
				gte: "Must be greater than or equal to {gte}",
			},
			enum: {
				invalid: "This value is not a valid enum",
				enum: "Must be one of the following values: {enum}",
			},
			boolean: {
				invalid: "This value is not a valid boolean",
			},
			date: {
				invalid: "This value is not a valid date",
				min: "Must be after {min}",
				max: "Must be before {max}",
			},
			array: {
				invalid: "This value is not a valid array",
				min: "Must be at least {min} items",
				max: "Must be at most {max} items",
				length: "Must contain {length} items",
			},
			object: {
				invalid: "This value is not a valid object",
			},
		},
	},

	// ============================================================================
	// MODELS - Database models related messages
	// ============================================================================
	enums: {
		userRole: {
			user: {
				value: "user",
				label: "User",
				description: "A regular user of the platform",
			},
			moderator: {
				value: "moderator",
				label: "Moderator",
				description: "A moderator of the platform",
			},
			admin: {
				value: "admin",
				label: "Admin",
				description: "An admin of the platform",
			},
			owner: {
				value: "owner",
				label: "Owner",
				description: "An owner of the platform",
			},
		},
	},
	models: {
		user: {
			name: "User",
			errors: {
				notFound: "User not found",
				emailTaken: "This email is already registered",
				usernameTaken: "This username is already registered",
				phoneNumberTaken: "This phone number is already registered",
				createFailed: "Failed to create user",
				updateFailed: "Failed to update user",
				deleteFailed: "Failed to delete user",
				noUsers: "There are no users",
			},
			fields: {
				name: {
					name: "name",
					label: "Name",
					description: "The full name of the user",
					placeholder: "Enter your name",
					validation: {
						required: "Name is required",
						min: "Name must be at least {min} characters",
						max: "Name must be at most {max} characters",
					},
				},
				email: {
					name: "email",
					label: "Email",
					description: "The email address of the user",
					placeholder: "Enter your email",
					validation: {
						required: "Email is required",
						email: "Email must be a valid email address",
					},
				},
				username: {
					name: "username",
					label: "Username",
					placeholder: "Enter your username",
					description: "The unique handle for the user profile",
					validation: {
						required: "Username is required",
						min: "Username must be at least {min} characters",
						max: "Username must be at most {max} characters",
						regex:
							"Username can only contain alphanumeric characters and underscores",
					},
				},
				phoneNumber: {
					name: "phoneNumber",
					label: "Phone Number",
					placeholder: "Enter your phone number",
					description: "Contact phone number",
					validation: {
						regex: "Phone number must be a valid phone number",
					},
				},
				role: {
					name: "role",
					label: "Role",
					placeholder: "Select a role",
					description: "The role of the user",
					validation: {
						required: "Role is required",
						invalid: "Invalid role selected",
					},
				},
				image: {
					name: "image",
					label: "Profile Picture",
					placeholder: "Upload your profile picture",
					description: "URL to the user's avatar",
					validation: {
						url: "Profile picture must be a valid URL",
					},
				},
				// Boolean flags and status fields
				emailVerified: {
					name: "emailVerified",
					label: "Email Verified",
					description: "Status of email verification",
				},
				twoFactorEnabled: {
					name: "twoFactorEnabled",
					label: "2FA Enabled",
					description: "Whether two-factor authentication is active",
				},
				banned: {
					name: "banned",
					label: "Banned",
					description: "Whether the user is currently banned",
				},
				banReason: {
					name: "banReason",
					label: "Ban Reason",
					placeholder: "Reason for banning the user",
					description: "Explanation for why the user was banned",
					validation: {
						max: "Reason must be at most {max} characters",
					},
				},
				banExpires: {
					name: "banExpires",
					label: "Ban Expiration",
					description: "Date when the ban will be lifted",
				},
				// System timestamps
				createdAt: {
					name: "createdAt",
					label: "Joined At",
					description: "Date when the user account was created",
				},
				updatedAt: {
					name: "updatedAt",
					label: "Last Updated",
					description: "Date when the user account was last modified",
				},
			},
		},
	},

	// ============================================================================
	// AUTH - Authentication & Authorization
	// ============================================================================
	auth: {
		common: {
			termsAccept: "I agree to the {terms} and {privacy}",
			termsLink: "Terms of Service",
			privacyLink: "Privacy Policy",

			fields: {
				password: {
					label: "Password",
					placeholder: "Enter your password",
					validation: {
						required: "Password is required",
						min: "Password must be at least {min} characters",
						max: "Password must be at most {max} characters",
						regex:
							"Password must contain at least one uppercase letter, one lowercase letter, and one number",
						nonempty: "Password cannot be empty",
					},
				},
				confirmPassword: {
					label: "Confirm Password",
					placeholder: "Confirm your password",
					validation: {
						required: "Confirm password is required",
						mismatch: "Passwords do not match",
					},
				},
				rememberMe: {
					label: "Remember me",
					validation: {
						invalid: "Invalid remember me value",
					},
				},
			},
		},
		login: {
			title: "Sign In",
			subtitle: "Welcome back! Please sign in to continue",
			forgotPassword: "Forgot password?",
			submitButton: "Sign In",
			noAccount: "Don't have an account?",
			signUpLink: "Sign up",
			errors: {
				invalidCredentials: "Invalid email or password",
				accountLocked: "Your account has been locked",
				emailNotVerified: "Please verify your email first",
			},
			success: "Signed in successfully",
		},
		register: {
			title: "Create Account",
			subtitle: "Get started with Vakansia",
			fields: {
				name: {
					label: "Full Name",
					placeholder: "Enter your full name",
				},
				username: {
					label: "Username",
					placeholder: "Enter your username",
				},
			},
			submitButton: "Create Account",
			hasAccount: "Already have an account?",
			signInLink: "Sign in",
			errors: {
				emailTaken: "This email is already registered",
				usernameTaken: "This username is already registered",
				weakPassword: "Password is too weak",
				passwordMismatch: "Passwords do not match",
			},
			success: "Account created successfully",
		},
		forgotPassword: {
			title: "Reset Password",
			subtitle: "Enter your email to receive reset instructions",
			submitButton: "Send Reset Link",
			backToLogin: "Back to sign in",
			success: "Check your email for reset instructions",
		},
		resetPassword: {
			title: "Set New Password",
			subtitle: "Enter your new password",
			submitButton: "Reset Password",
			backToLogin: "Back to sign in",
			success: "Password reset successfully",
		},
	},
};

export type LocaleKeys = GetLocaleKeys<typeof en>;
