/** biome-ignore-all lint/style/noExportedImports: we need to export the cloudinary instance */
import { env } from "@vakansia/env/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: env.CLOUDINARY_CLOUD_NAME,
	api_key: env.CLOUDINARY_API_KEY,
	api_secret: env.CLOUDINARY_API_SECRET,
	secure: true,
});

export { cloudinary };
