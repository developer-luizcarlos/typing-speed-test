/**
 *
 * @param {number} interval
 * @param {() => any} callback
 */
export function timer(interval, callback) {
	let timerID;

	const init = () => {
		timerID = setInterval(() => {
			callback();
		}, interval);
	};

	const stop = () => clearInterval(timerID);

	return {init, stop};
}
