import {Game} from "../classes/Game.js";
import {fetchTexts} from "./fetchTexts.js";

/**
 * Get a text based on the current difficult's level
 * of the current game's difficult.
 * @returns {Promise<string>}
 */
export async function getTextBasedOnCurrentDifficultAndLevel() {
	const difficult = Game.getDifficult;
	const level = Game.getLevel - 1;

	const textsObject = await fetchTexts();

	const textsOfGivenDifficult = textsObject[difficult];

	const textOfGivenLevelOfGivenDifficult =
		textsOfGivenDifficult.at(level).text;

	return textOfGivenLevelOfGivenDifficult;
}
