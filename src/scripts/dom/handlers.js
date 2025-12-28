import {Game} from "../classes/Game.js";
import {areLettersEquals} from "../helpers/areLettersEquals.js";
import {loadProgressIfExists} from "../helpers/loadProgressIfExists.js";
import * as gameService from "../services/gameService.js";
import {GameProgress} from "../storage/GameProgress.storage.js";
import * as accuracy from "./accuracy.js";
import * as elements from "./elements.js";
import * as keyboard from "./keyboard.js";
import * as pills from "./pills.js";
import {resetRenderedContent} from "./resetRenderedContent.js";
import * as text from "./text.js";
import * as time from "./time.js";
import * as wpm from "./wpm.js";

export async function contentLoadedHandler() {
	loadProgressIfExists();

	text.renderText();

	pills.highlightPillBasedOnDifficult();

	pills.highlightPillBasedOnMode();

	if (Game.getCanPlay) {
		time.minutesTimer.init();
	}
}

/**
 *
 * @param {HTMLElement} pill
 */
export function difficultpillHandler(pill) {
	/**
	 * @type {"easy" | "medium" | "hard"}
	 */
	const difficult = pill.getAttribute("data-difficult");

	GameProgress.saveDifficult(difficult);
	GameProgress.saveLevel(1);

	Game.setDifficult = difficult;
	Game.setLevel = 1;

	pills.updateHighlithedPill(pill, elements.$difficultPills);

	resetRenderedContent();
}

/**
 *
 * @param {HTMLElement} pill
 */
export function modePillHandler(pill) {
	const mode = pill.getAttribute("data-mode");

	GameProgress.saveMode(mode);

	Game.setMode = mode;

	pills.updateHighlithedPill(pill, elements.$modePills);

	resetRenderedContent();
}

/**
 *
 * @param {KeyboardEvent} event
 */
export function keyboardHandler(event) {
	if (!Game.getCanPlay) {
		return;
	}

	const key = event.key;

	const textChars = text.getTextLettersAndPontuaction();

	if (
		!keyboard.isPressedKeysQuantityLessThanTextLength(textChars.length)
	) {
		/**
		 * TODO: check if the user will upgrade level
		 * by the percentage of  his right tries. (accuracy)
		 */
		time.minutesTimer.stop();
		return;
	}

	// stops triggering a firefox shortcut.
	keyboard.preventBrowserShortcuts(event);

	if (!keyboard.isLetterKey(key)) {
		return;
	}

	const currentLetter = textChars.at(
		keyboard.keyPressed.getCount,
	).textContent;

	// let areKeyAndCurrentLetterEquals = key === currentLetter;
	let areKeyAndCurrentLetterEquals = areLettersEquals(key, currentLetter);

	if (currentLetter === "—" && key === "-") {
		areKeyAndCurrentLetterEquals = true;
	}

	const attemptStatus = areKeyAndCurrentLetterEquals ? "right" : "wrong";

	text.highlightTextChar(keyboard.keyPressed.getCount, attemptStatus);

	keyboard.keyPressed.incrementCount();

	const calculatedAccuracy = gameService.calculateGameAccuracy(
		text.getTextCharsCorrectlyTyped().length,
		textChars.length,
	);

	Game.setAccuracy = calculatedAccuracy;

	accuracy.renderAccuracy();

	wpm.renderWPM();
}
