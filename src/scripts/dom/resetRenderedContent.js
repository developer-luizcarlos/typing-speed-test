import {Game} from "../classes/Game.js";
import * as accuracy from "./accuracy.js";
import * as keyboard from "./keyboard.js";
import * as text from "./text.js";
import * as time from "./time.js";
import * as wpm from "./wpm.js";

/**
 * @returns {void}
 */
export function resetRenderedContent() {
	Game.setAccuracy = 0;

	Game.setCanPlay = true;

	accuracy.renderAccuracy();

	time.resetTime();

	time.minutesTimer.stop();

	time.minutesTimer.init();

	keyboard.keyPressed.reset();

	text.clearText();

	text.renderText();

	wpm.resetWPM();
}
