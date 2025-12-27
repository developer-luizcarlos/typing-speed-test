import {Counter} from "../classes/Counter.js";
import {Game} from "../classes/Game.js";
import {Timer} from "../classes/Timer.js";
import {formatSecondsToMinutes} from "../helpers/formatSecondsToMinutes.js";
import * as elements from "./elements.js";

const SECONDS_IN_A_MINUTE = 60;

export const timeCounter = new Counter();

export function getPassedTimeInSeconds() {
	return timeCounter.getCount;
}

export const minutesTimer = new Timer(1000, () => {
	if (timeCounter.getCount === SECONDS_IN_A_MINUTE) {
		Game.setCanPlay = false;

		minutesTimer.stop();
	}

	renderTime();

	timeCounter.incrementCount();
});

/**
 * @returns {void}
 */
export function renderTime() {
	const minutesPassed = formatSecondsToMinutes(timeCounter.getCount);

	elements.$time.textContent = minutesPassed;
}

/**
 * @returns {void}
 */
export function resetTime() {
	timeCounter.reset();

	elements.$time.textContent = formatSecondsToMinutes(0);
}
