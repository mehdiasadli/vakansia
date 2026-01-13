"use client";
import { env } from "@vakansia/env/web";

export default function Content() {
	console.log("CLIENT:");

	console.log("DOMAINS:", env.NEXT_PUBLIC_DOMAINS.admin);

	return <div>Content</div>;
}
