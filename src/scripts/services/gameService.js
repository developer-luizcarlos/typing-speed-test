export function calculateGameAccuracy(rightAttempts, totalCases) {
	return Math.trunc((rightAttempts / totalCases) * 100);
}
