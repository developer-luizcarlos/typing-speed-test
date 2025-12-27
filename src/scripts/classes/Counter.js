export class Counter {
	count = 0;

	/**
	 * @returns {void}
	 */
	incrementCount() {
		this.count += 1;
	}

	get getCount() {
		return this.count;
	}

	/**
	 * @returns {void}
	 */
	reset() {
		this.count = 0;
	}
}
