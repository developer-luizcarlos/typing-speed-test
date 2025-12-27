import {Game} from "../classes/Game.js";
import * as elements from "./elements.js";

/**
 *
 * @returns {void}
 */
export function renderAccuracy() {
	elements.$accuracy.textContent = `${Game.getAccuracy}%`;
}
