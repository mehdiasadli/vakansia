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
	// AUTH - Authentication & Authorization
	// ============================================================================
	auth: {
		common: {
			termsAccept: "I agree to the {terms} and {privacy}",
			termsLink: "Terms of Service",
			privacyLink: "Privacy Policy",

			fields: {
				email: {
					label: "Email",
					placeholder: "Enter your email",
				},
				password: {
					label: "Password",
					placeholder: "Enter your password",
				},
				confirmPassword: {
					label: "Confirm Password",
					placeholder: "Confirm your password",
				},
			},
		},
		login: {
			title: "Sign In",
			subtitle: "Welcome back! Please sign in to continue",
			fields: {
				rememberMe: {
					label: "Remember me",
				},
			},
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
			title: "Reset Password",
			subtitle: "Enter your email to receive reset instructions",
			submitButton: "Send Reset Link",
			backToLogin: "Back to sign in",
			success: "Check your email for reset instructions",
		},
	},
};

export type LocaleKeys = GetLocaleKeys<typeof en>;
