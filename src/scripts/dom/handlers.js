import * as gameStatus from "../gameStatus.js";
import {renderText} from "../helpers/renderText.js";
import * as elements from "./elements.js";
import * as pills from "./pills.js";

export async function contentLoadedHandler() {
	renderText(gameStatus.getGameDifficult(), gameStatus.getGameLevel());
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

	renderText(gameStatus.getGameDifficult(), gameStatus.getGameLevel());

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
