import type { ImageTransformationOptions, UploadApiOptions } from "cloudinary";

export const uploadOptions = {
	users: {
		avatar: {
			folder: "users/avatars",
			allowed_formats: ["jpg", "jpeg", "png", "webp"],
			resource_type: "image",
			transformation: [
				{ width: 400, height: 400, crop: "fill", gravity: "face" },
				{ quality: "auto", format: "auto" },
			] as ImageTransformationOptions[],
		},
	},
	organizations: {
		logo: {
			folder: "organizations/logos",
			allowed_formats: ["jpg", "jpeg", "png", "webp"],
			resource_type: "image",
			transformation: [
				{ width: 400, height: 400, crop: "fill" },
				{ quality: "auto", format: "auto" },
			] as ImageTransformationOptions[],
		},
		cover: {
			folder: "organizations/covers",
			allowed_formats: ["jpg", "jpeg", "png", "webp"],
			resource_type: "image",
			transformation: [
				{ width: 1200, height: 620, crop: "limit" },
				{ quality: "auto", format: "auto" },
			] as ImageTransformationOptions[],
		},
	},
	applications: {
		resume: {
			folder: "applications/resumes",
			allowed_formats: ["pdf", "docx", "jpg", "jpeg", "png"],
			resource_type: "raw",
			access_mode: "authenticated",
		},
	},
} as const satisfies Record<
	string,
	Record<string, ImageTransformationOptions | UploadApiOptions>
>;
