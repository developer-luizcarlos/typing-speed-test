/**
 * @param {string} key
 * @returns {boolean}
 */
export function isLetterKey(key) {
	return /^[a-zA-Z\.\,\'\"\:\-\;]$/.test(key);
}
