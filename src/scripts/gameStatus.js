export let canPlay = true;

/**
 * Game's difficult.
 * @type {"easy" | "medium" | "hard"}
 */
export let difficult = "easy";

/**
 * In a certain difficult, we have
 * a set of levels, from one to ten,
 * allowing the player progress in the level
 * while passing each level. If the player passes
 * level ten of a difficult, then he'll pass to the
 * next difficult.
 * @type {number}
 */
export let level = 1;

export function getGameDifficult() {
	return difficult;
}

export function getGameLevel() {
	return level;
}

export function increaseGameDifficult() {
	if (difficult === "hard") {
		return;
	}

	difficult = difficult === "easy" ? "medium" : "hard";
}

export function increaseGameLevel() {
	level += 1;
}
