import {Counter} from "../classes/Counter.js";

/**
 * Keeps the quantity of pressed keys.
 */
export const keyPressed = new Counter();

/**
 * @param {string} key
 * @returns {boolean}
 */
export function isLetterKey(key) {
	return /^[a-zA-Z\.\,\'\"\:\-\;]$/.test(key);
}

export function isPressedKeysQuantityLessThanTextLength(textLength) {
	return keyPressed.getCount < textLength;
}

/**
 *
 * @param {KeyboardEvent} event
 * @returns {void}
 */
export function preventBrowserShortcuts(event) {
	const key = event.key;

	const triggerShortcutsKeys = ["'", "/"];

	const isKeyPressedTriggerShorcutKey = triggerShortcutsKeys.some(k => {
		// turns comparison case-insensitive.
		return k.toLowerCase() === key.toLowerCase();
	});

	if (isKeyPressedTriggerShorcutKey) {
		return event.preventDefault();
	}
}
