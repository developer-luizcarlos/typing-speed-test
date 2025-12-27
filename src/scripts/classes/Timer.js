export class Timer {
	/**
	 * @type {number};
	 */
	_duration;

	/**
	 * @type {() => any}
	 */
	_callback;

	/**
	 * @type {number}
	 */
	_timerID;

	/**
	 *
	 * @param {number} duration
	 * @param {() => any} callback
	 */
	constructor(duration, callback) {
		this._duration = duration;
		this._callback = callback;
	}

	init() {
		this._timerID = setInterval(() => {
			this._callback();
		}, this._duration);
	}

	stop() {
		clearInterval(this._timerID);
	}
}
