import {Counter} from "../classes/Counter.js";
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
	const textChars = getTextLettersAndPontuaction();

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
export function getTextLettersAndPontuaction() {
	return Array.from(elements.$text.children).filter(
		v => v.textContent !== " ",
	);
}

export function getTextCharsHighlightedAsRight() {
	return getTextLettersAndPontuaction().filter(v =>
		v.classList.contains("right"),
	);
}

/**
 * Get an array of span elements,
 * representing each of these arrays
 * a word in the rendered text.
 * @returns {HTMLSpanElement[][]}
 */
export function getTextWords() {
	const children = Array.from(elements.$text.children);

	/**
	 * @type {HTMLSpanElement[][]}
	 */
	const words = [];

	let startSliceIndex = 0;

	children.forEach((child, index) => {
		const isWhiteSpace = child.textContent === " ";

		if (isWhiteSpace) {
			const word = children.slice(startSliceIndex, index);

			startSliceIndex = index + 1;

			words.push(word);
		}

		// insert the last word in the words array.
		if (index === children.length - 1) {
			const word = children.slice(startSliceIndex, index);

			words.push(word);
		}
	});

	return words;
}

/**
 * Returns the quantity of correct words
 * you've typed.
 * @returns {number}
 */
export function getCorrectlyTypedWordsQuantity() {
	const words = getTextWords();

	const correctlyTypedWords = words.filter(spans => {
		return spans.every(span => span.classList.contains("right"));
	});

	const correctlyTypedWordsQuantity = correctlyTypedWords.length;

	return correctlyTypedWordsQuantity;
}
