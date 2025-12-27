/**
 *
 * @param  {string[]} letters
 * @returns {boolean}
 */
export function areLettersEquals(...letters) {
	if (letters.length <= 1) {
		throw new Error(
			"Two letters at least for comparison should be given.",
		);
	}

	const firstItem = letters[0];

	return letters.slice(1).every(item => item === firstItem);
}
