import {getTextsByDifficult} from "../helpers/getTextsByDifficult.js";
import * as elements from "./elements.js";

/**
 * @param {"easy" | "medium" | "hard"} gameDifficult
 * @param {number} gameLevel
 * @returns {void}
 */

export async function renderText(gameDifficult, gameLevel) {
	const texts = await getTextsByDifficult(gameDifficult);
	const textOnLevel = texts.at(gameLevel - 1).text;

	const charsOnText = textOnLevel.split("");

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
