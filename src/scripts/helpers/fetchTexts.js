/**
 *
 * @returns {Promise<{easy: {id: string,text: string}[],medium: {id: string,text: string}[],hard: {id: string,text: string}[]}>}
 */
export async function fetchTexts() {
	const data = await fetch("../../public/data.json");
	const result = await data.json();

	return result;
}
