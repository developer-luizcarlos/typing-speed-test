/**
 *
 * @param {number} seconds
 * @returns {string}
 */
export function formatSecondsToMinutes(seconds) {
	const minutes = Math.floor(seconds / 60);
	const secondsLeft = seconds % 60;

	const secondsOutput = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

	return `${minutes}:${secondsOutput}`;
}
