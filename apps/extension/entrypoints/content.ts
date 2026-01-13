/** biome-ignore-all lint/correctness/noUndeclaredVariables: wxt */
export default defineContentScript({
	matches: ["*://*.google.com/*"],
	main() {
		console.log("Hello content.");
	},
});
