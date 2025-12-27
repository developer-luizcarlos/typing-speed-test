export class Game {
	static accuracy = 0;

	static canPlay = true;

	/**
	 * @type {"easy" | "medium" | "hard"}
	 */
	static difficult = "easy";

	/**
	 * In each difficult,
	 * we have a set of levels, from one to ten,
	 * allowing the player progressing in the difficult
	 * while passing each level. If the player passes
	 * level ten of a difficult, then he'll pass to the
	 * next difficult.
	 * @type {number}
	 */
	static level = 1;

	/**
	 * @type {"timed" | "passage"}
	 */
	static mode = "timed";

	/**
	 *
	 * @returns {void}
	 */
	static increaseDifficult() {
		if (this.difficult === "hard") {
			return;
		}

		this.setDifficult(this.difficult === "easy" ? "medium" : "hard");
	}

	static increaseLevel() {
		this.level += 1;
	}

	static get getAccuracy() {
		return this.accuracy;
	}

	static get getCanPlay() {
		return this.canPlay;
	}

	static get getDifficult() {
		return this.difficult;
	}

	/**
	 *
	 * @returns {number} In each difficult,
	 * we have a set of levels, from one to ten,
	 * allowing the player progressing in the difficult
	 * while passing each level. If the player passes
	 * level ten of a difficult, then he'll pass to the
	 * next difficult.
	 */
	static get getLevel() {
		return this.level;
	}

	/**
	 * @param {number} accuracy
	 * @returns {void}
	 */
	static set setAccuracy(accuracy) {
		this.accuracy = accuracy;
	}

	/**
	 * @param {boolean} canPlay
	 * @returns {void}
	 */
	static set setCanPlay(canPlay) {
		this.canPlay = canPlay;
	}

	/**
	 * @param {"easy" | "medium" | "hard"} difficult
	 * @returns {void}
	 */
	static set setDifficult(difficult) {
		this.difficult = difficult;
	}

	/**
	 * @param {"timed" | "passage"} mode
	 * @returns {void}
	 */
	static set setMode(mode) {
		this.mode = mode;
	}
}
