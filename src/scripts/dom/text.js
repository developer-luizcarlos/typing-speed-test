import {getTextBasedOnCurrentDifficultAndLevel} from "../helpers/getTextBasedOnCurrentDifficultAndLevel.js";
import * as elements from "./elements.js";

/**
 * @returns {void}
 */
export function clearText() {
	elements.$text.innerHTML = "";
}

export function getCorrectlyTypedWords() {
	const words = getTextWordsMadeOfSpans();

	const correctlyTypedWords = words.filter(spans => {
		return spans.every(span => span.classList.contains("right"));
	});

	return correctlyTypedWords;
}

/**
 * Returns the quantity of correct words
 * you've typed.
 * @returns {number}
 */
export function getCorrectlyTypedWordsQuantity() {
	const correctlyTypedWords = getCorrectlyTypedWords();

	const correctlyTypedWordsQuantity = correctlyTypedWords.length;

	return correctlyTypedWordsQuantity;
}

export function getTextCharsCorrectlyTyped() {
	return getTextLettersAndPontuaction().filter(v =>
		v.classList.contains("right"),
	);
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

/**
 * Get an array of span elements,
 * representing each of these arrays
 * a word in the rendered text.
 * @returns {HTMLSpanElement[][]}
 */
export function getTextWordsMadeOfSpans() {
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
 * @param {"easy" | "medium" | "hard"} gameDifficult
 * @param {number} gameLevel
 * @returns {void}
 */

export async function renderText() {
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
