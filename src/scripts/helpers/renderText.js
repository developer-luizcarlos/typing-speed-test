import * as elements from "../dom/elements.js";
import {getTextsByDifficult} from "./getTextsByDifficult.js";

/**
 * @param {"easy" | "medium" | "hard"} gameDifficult
 * @param {number} gameLevel
 * @returns {void}
 */
export async function renderText(gameDifficult, gameLevel) {
	const texts = await getTextsByDifficult(gameDifficult);
	const textOnLevel = texts.at(gameLevel - 1).text;

	elements.$text.textContent = textOnLevel;
}
