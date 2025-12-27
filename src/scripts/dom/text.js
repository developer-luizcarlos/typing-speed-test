import {getTextBasedOnCurrentDifficultAndLevel} from "../helpers/getTextBasedOnCurrentDifficultAndLevel.js";
import * as elements from "./elements.js";

/**
 * @param {"easy" | "medium" | "hard"} gameDifficult
 * @param {number} gameLevel
 * @returns {void}
 */

export async function renderText(gameDifficult, gameLevel) {
	const text = await getTextBasedOnCurrentDifficultAndLevel();

	const charsOnText = text.split("");

	const fragment = document.createDocumentFragment();

	for (const char of charsOnText) {
		const $span = document.createElement("span");
		$span.textContent = char;

		fragment.appendChild($span);
	}

	elements.$text.append(fragment);
}

/**
 * @returns {void}
 */
export function clearText() {
	elements.$text.innerHTML = "";
}

/**
 *
 * @param {number} index
 * @param {"right" | "wrong"} status
 */
export function highlightTextChar(index, status) {
	const textChars = getTextChars();

	const textCharsLength = textChars.length;

	if (index >= textCharsLength) {
		return;
	}

	const charAt = textChars.at(index);

	charAt.classList.add(status);
}

/**
 *
 * @returns {HTMLSpanElement[]}
 */
export function getTextChars() {
	return Array.from(elements.$text.children).filter(
		v => v.textContent !== " ",
	);
}

export function getTextCharsHighlightedAsRight() {
	return getTextChars().filter(v => v.classList.contains("right"));
}
