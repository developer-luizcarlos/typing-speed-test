import * as elements from "./elements.js";
import * as text from "./text.js";
import * as time from "./time.js";

/**
 * @returns {number}
 */
export function getWPM() {
	const correctlyPressedCharsQuantity =
		text.getTextLettersHighlightedAsRight().length;

	const passedSeconds = time.getPassedTimeInSeconds();

	if (passedSeconds < 3) {
		return 0;
	}

	const wpm = Math.floor(
		(correctlyPressedCharsQuantity * 60) / (5 * passedSeconds),
	);

	return wpm;
}

/**
 * @returns {void}
 */
export function renderWPM() {
	const wpm = getWPM();

	const wpmOutput = wpm < 10 ? `0${wpm}` : wpm;

	elements.$wpm.textContent = wpmOutput;
}

/**
 * @returns {void}
 */
export function resetWPM() {
	elements.$wpm.innerHTML = "00";
}
