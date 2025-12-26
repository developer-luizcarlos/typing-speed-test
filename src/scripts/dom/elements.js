/**
 * @type {HTMLParagraphElement}
 */
export const $text = document.querySelector(".text");

/**
 * @type {HTMLElement[]}
 */
export const $difficultPills = Array.from(
	document.querySelectorAll(".pill--difficult"),
);

/**
 * @type {HTMLElement[]}
 */
export const $modePills = Array.from(
	document.querySelectorAll(".pill--mode"),
);

export const $accuracy = document.querySelector(
	".game-info__dd--accuracy",
);

export const $time = document.querySelector(".game-info__dd--time");
