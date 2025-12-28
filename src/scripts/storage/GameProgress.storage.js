// TODO: Criar uma classe para salvar e pegar informações do local storage.
// TODO: Em ContentLoaded event, verificar se há progresso salvo e "setar" as propriedades de Game. loadProgressIfExists()
// GameProgress itens: difficult, level, best wpm, mode.

export class GameProgress {
	static getBestWPM() {
		return localStorage.getItem("best-wpm");
	}

	/**
	 *
	 * @returns {"easy" | "medium" | "hard" | null}
	 */
	static getDifficult() {
		return localStorage.getItem("difficult");
	}

	static getLevel() {
		return localStorage.getItem("level");
	}

	/**
	 *
	 * @returns {"timed" | "passage" | null}
	 */
	static getMode() {
		return localStorage.getItem("mode");
	}

	/**
	 * @param {number} wpm
	 * @returns {void}
	 */
	static saveBestWPM(wpm) {
		localStorage.setItem("best-wpm", wpm);
	}

	/**
	 *
	 * @param {"easy"| "medium"| "hard"} difficult
	 * @returns {void}
	 */
	static saveDifficult(difficult) {
		localStorage.setItem("difficult", difficult);
	}

	/**
	 *
	 * @param {number} level
	 * @returns {void}
	 */
	static saveLevel(level) {
		localStorage.setItem("level", level);
	}

	/**
	 *
	 * @param {"timed" | "passage"} mode
	 * @returns {void}
	 */
	static saveMode(mode) {
		localStorage.setItem("mode", mode);
	}
}
