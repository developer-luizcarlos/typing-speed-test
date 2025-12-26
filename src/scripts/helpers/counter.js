export function counter() {
	let count = 0;

	const getCount = () => count;

	const incrementCount = () => (count += 1);

	const reset = () => (count = 0);

	return {
		getCount,
		incrementCount,
		reset,
	};
}
