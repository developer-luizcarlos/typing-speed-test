import * as elements from "./elements.js";
import * as handlers from "./handlers.js";

export function initEvents() {
	document.addEventListener("DOMContentLoaded", async () => {
		handlers.contentLoadedHandler();
	});

	document.addEventListener("keydown", e => {
		handlers.keyboardHandler(e);
	});

	elements.$difficultPills.forEach(pill => {
		pill.addEventListener("click", () => {
			handlers.DifficultpillHandler(pill);
		});
	});

	elements.$modePills.forEach(pill => {
		pill.addEventListener("click", () => {
			handlers.modePillHandler(pill);
		});
	});
}
