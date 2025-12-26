export let canPlay = true;

export let gameAccuracy = 0;

/**
 * Game's difficult.
 * @type {"easy" | "medium" | "hard"}
 */
export let gameDifficult = "easy";

/**
 * In a certain difficult, we have
 * a set of levels, from one to ten,
 * allowing the player progress in the level
 * while passing each level. If the player passes
 * level ten of a difficult, then he'll pass to the
 * next difficult.
 * @type {number}
 */
export let gameLevel = 1;

/**
 * @type {"timed" | "passage"}
 */
export let gameMode = "timed";

export function getGameAccuracy() {
	return gameAccuracy;
}

export function getGameDifficult() {
	return gameDifficult;
}

export function getGameLevel() {
	return gameLevel;
}

export function increaseGameDifficult() {
	if (gameDifficult === "hard") {
		return;
	}

	gameDifficult = gameDifficult === "easy" ? "medium" : "hard";
}

export function increaseGameLevel() {
	gameLevel += 1;
}

/**
 *
 * @param {number} accuracy
 * @returns {void}
 */
export function setGameAccuracy(accuracy) {
	gameAccuracy = accuracy;
}

/**
 *
 * @param {"easy" | "medium" | "hard"} difficult
 * @returns {void}
 */
export function setGameDifficult(difficult) {
	if (gameDifficult === difficult) {
		return;
	}

	gameDifficult = difficult;
}

/**
 *
 * @param {number} level
 */
export function setGameLevel(level) {
	if (gameLevel === level) {
		return;
	}

	gameLevel = level;
}

/**
 *
 * @param {"timed" | "passed"} mode
 * @returns {void}
 */
export function setGameMode(mode) {
	gameMode = mode;
}
