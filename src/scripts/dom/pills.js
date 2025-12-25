import * as elements from "./elements.js";

/**
 *
 * @param {HTMLElement} pillToBeHighlithed
 * @param {HTMLElement[]} pills
 */
export function updateHighlithedPill(pillToBeHighlithed, pills) {
	const isAlreadyHighlithed =
		pillToBeHighlithed.classList.contains("pill--selected");

	if (isAlreadyHighlithed) {
		return;
	}

	const currentHighlithedPill = pills.find(el =>
		el.classList.contains("pill--selected"),
	);

	currentHighlithedPill.classList.remove("pill--selected");

	pillToBeHighlithed.classList.add("pill--selected");
}
