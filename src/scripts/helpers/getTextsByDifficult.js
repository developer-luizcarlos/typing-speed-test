import {fetchTexts} from "./fetchTexts.js";

/**
 *
 * @param {"easy" | "medium" | "hard"} level
 * @returns {Promise<{id: string,text: string}[]>}
 */
export async function getTextsByDifficult(level) {
	const textsObject = await fetchTexts();

	return textsObject[level];
}
