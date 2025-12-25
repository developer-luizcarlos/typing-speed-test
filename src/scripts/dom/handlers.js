import * as gameStatus from "../gameStatus.js";
import {renderText} from "../helpers/renderText.js";

export async function contentLoadedHandler() {
	gameStatus.increaseGameLevel();

	renderText(gameStatus.getGameDifficult(), gameStatus.getGameLevel());
}
