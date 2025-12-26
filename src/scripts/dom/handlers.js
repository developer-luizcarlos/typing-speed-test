import * as gameStatus from "../gameStatus.js";
import {counter} from "../helpers/counter.js";
import * as gameService from "../services/gameService.js";
import * as accuracy from "./accuracy.js";
import * as elements from "./elements.js";
import * as keyboard from "./keyboard.js";
import * as pills from "./pills.js";
import * as text from "./text.js";

const keyCounter = counter();

export async function contentLoadedHandler() {
	text.renderText(
		gameStatus.getGameDifficult(),
		gameStatus.getGameLevel(),
	);
}

/**
 *
 * @param {HTMLElement} pill
 */
export function DifficultpillHandler(pill) {
	/**
	 * @type {"easy" | "medium" | "hard"}
	 */
	const difficult = pill.getAttribute("data-difficult");

	gameStatus.setGameDifficult(difficult);
	gameStatus.setGameLevel(1);

	keyCounter.reset();

	gameStatus.setGameAccuracy(0);

	accuracy.renderAccuracy();

	text.clearText();

	text.renderText(
		gameStatus.getGameDifficult(),
		gameStatus.getGameLevel(),
	);

	pills.updateHighlithedPill(pill, elements.$difficultPills);
}

/**
 *
 * @param {HTMLElement} pill
 */
export function modePillHandler(pill) {
	const mode = pill.getAttribute("data-mode");

	gameStatus.setGameMode(mode);

	pills.updateHighlithedPill(pill, elements.$modePills);
}

/**
 *
 * @param {KeyboardEvent} keyboardEvent
 */
export function keyboardHandler(keyboardEvent) {
	if (!gameStatus.canPlay) {
		return;
	}

	const key = keyboardEvent.key;

	const textChars = text.getTextChars();

	if (keyCounter.getCount() >= textChars.length) {
		/**
		 * TODO: check if the user will upgrade level
		 * by the percentage of  his right tries. (accuracy)
		 */
		return;
	}

	if (!keyboard.isLetterKey(key)) {
		return;
	}

	// stops triggering a firefox shortcut.
	if (key === "'") {
		keyboardEvent.preventDefault();
	}

	const currentLetter = textChars.at(keyCounter.getCount()).textContent;

	let areKeyAndCurrentLetterEquals = key === currentLetter;

	if (currentLetter === "—" && key === "-") {
		areKeyAndCurrentLetterEquals = true;
	}

	const attemptStatus = areKeyAndCurrentLetterEquals ? "right" : "wrong";

	text.highlightTextChar(keyCounter.getCount(), attemptStatus);

	keyCounter.incrementCount();

	const calculatedAccuracy = gameService.calculateGameAccuracy(
		text.getTextCharsHighlightedAsRight().length,
		textChars.length,
	);

	gameStatus.setGameAccuracy(calculatedAccuracy);

	accuracy.renderAccuracy();
}
