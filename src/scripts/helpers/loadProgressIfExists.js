import {Game} from "../classes/Game.js";
import {GameProgress} from "../storage/GameProgress.storage.js";

/**
 * @returns {void}
 */
export function loadProgressIfExists() {
	const savedDifficult = GameProgress.getDifficult();
	const savedLevel = GameProgress.getLevel();
	const savedMode = GameProgress.getMode();

	const thereIsNoProgress = !savedDifficult && !savedLevel && !savedMode;

	if (thereIsNoProgress) {
		return;
	}

	if (savedDifficult) {
		Game.setDifficult = savedDifficult;
	}

	if (savedLevel) {
		Game.setLevel = savedLevel;
	}

	if (savedMode) {
		Game.setMode = savedMode;
	}
}
