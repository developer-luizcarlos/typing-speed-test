import * as gameStatus from "../gameStatus.js";
import * as elements from "./elements.js";

/**
 *
 * @returns {void}
 */
export function renderAccuracy() {
	elements.$accuracy.textContent = `${gameStatus.getGameAccuracy()}%`;
}
