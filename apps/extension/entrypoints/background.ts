/** biome-ignore-all lint/correctness/noUndeclaredVariables: wxt */
export default defineBackground(() => {
	console.log("Hello background!", { id: browser.runtime.id });
});
