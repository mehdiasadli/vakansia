import type { en } from "./en";

export const az = {
	// ============================================================================
	// COMMON - Shared across all apps
	// ============================================================================
	common: {
		actions: {
			save: "Yadda saxla",
			cancel: "Ləğv et",
			delete: "Sil",
			edit: "Düzəliş et",
			create: "Yarat",
			update: "Yenilə",
			submit: "Təsdiq et",
			confirm: "Təsdiq et",
			back: "Geri",
			next: "Növbəti",
			previous: "Öncəki",
			close: "Bağla",
			search: "Axtar",
			filter: "Filterlə",
			sort: "Sırala",
			export: "Eksport et",
			import: "İmport et",
			download: "Yüklə",
			upload: "Yüklə",
			copy: "Kopyala",
			share: "Paylaş",
			viewDetails: "Detallara bax",
			learnMore: "Ətraflı öyrən",
		},
		status: {
			active: "Aktiv",
			inactive: "Aktiv deyil",
			pending: "Gözləmədə",
			approved: "Təsdiqlənmiş",
			rejected: "Rədd edilmiş",
			draft: "Draft",
			published: "Paylaşılmış",
			archived: "Arxivlənmiş",
			deleted: "Silinmiş",
		},
		messages: {
			loading: "Yüklənir...",
			saving: "Yadda saxlanılır...",
			success: "Uğurlu!",
			error: "Xəta baş verdi",
			noResults: "Nəticə tapılmadı",
			noData: "Məlumat yoxdur",
			confirmDelete: "Silmək istədiyinizə əminmisiniz?",
			unsavedChanges: "Yadda saxlanmamış dəyişikliklər var",
		},
		validation: {
			// Common validation messages, which are not tied to a specific field
			required: "Bu sahə tələb olunur",
			invalid: "Bu sahənin dəyəri yanlışdır",
			string: {
				invalid: "Bu sahənin dəyəri tekst formatında olmalıdır",
				min: "Minimum {min} simvol olmalıdır",
				max: "Maksimum {max} simvol olmalıdır",
				regex: "Yanlış format",
				nonempty: "Bu sahə boş ola bilməz",
				uuid: "ID yanlışdır",
				startsWith: "{startsWith} ilə başlamalıdır",
				endsWith: "{endsWith} ilə bitməlidir",
				includes: "Daxilində {includes} olmalıdır",
				email: "Elektron poçt ünvanı yanlışdır",
				url: "URL yanlışdır",
				ipv4: "IP ünvanı yanlışdır",
				ipv6: "IP ünvanı yanlışdır",
				slug: "Slug formatı yanlışdır",
			},
			number: {
				invalid: "Bu sahənin dəyəri ədəd olmalıdır",
				min: "Minimum {min} olmalıdır",
				max: "Maksimum {max} olmalıdır",
				integer: "Tam ədəd olmalıdır",
				positive: "Müsbət ədəd olmalıdır",
				negative: "Mənfi ədəd olmalıdır",
				nonNegative: "Mənfi olmayan ədəd olmalıdır",
				nonPositive: "Müsbət olmayan ədəd olmalıdır",
				multipleOf: "{multipleOf} ədədinin bölünəni olmalıdır",
				lt: "{lt} ədədindən kiçik olmalıdır",
				lte: "{lte} ədədindən kiçik və ya ona bərabər olmalıdır",
				gt: "{gt} ədədindən böyük olmalıdır",
				gte: "{gte} ədədindən böyük və ya ona bərabər olmalıdır",
			},
			enum: {
				invalid: "Bu sahənin dəyəri `enum` formatında olmalıdır",
				enum: "Aşağıdakı dəyərlərdən birini seçin: {enum}",
			},
			boolean: {
				invalid: "Bu sahənin dəyəri `boolean` formatında olmalıdır",
			},
			date: {
				invalid: "Bu sahənin dəyəri tarix formatında olmalıdır",
				min: "{min} tarixindən sonra olmalıdır",
				max: "{max} tarixindən əvvəl olmalıdır",
			},
			array: {
				invalid: "Bu sahənin dəyəri siyahı formatında olmalıdır",
				min: "Minimum {min} element olmalıdır",
				max: "Maksimum {max} element olmalıdır",
				length: "Daxilində {length} element olmalıdır",
			},
			object: {
				invalid: "Bu sahənin dəyəri obyekt formatında olmalıdır",
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
} satisfies typeof en;
