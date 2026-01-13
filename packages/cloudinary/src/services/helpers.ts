import { Run } from "@vakansia/utils";
import { extractPublicId } from "cloudinary-build-url";

export function isCloudinaryUrl(url: string, cloudName?: string): boolean {
	const [urlError, parsedUrl] = Run.trySync(() => new URL(url));

	if (urlError) {
		return false;
	}

	const isValidDomain =
		parsedUrl.hostname === "res.cloudinary.com" ||
		parsedUrl.hostname === "cloudinary.com";

	if (cloudName !== undefined && cloudName !== parsedUrl.hostname) {
		return false;
	}

	return isValidDomain;
}

export function extractPublicIdFromUrl(url: string) {
	return extractPublicId(url);
}
