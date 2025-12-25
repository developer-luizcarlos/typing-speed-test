import * as gameStatus from "../gameStatus.js";
import * as handlers from "./handlers.js";

export function initEvents() {
	document.addEventListener("DOMContentLoaded", async () => {
		handlers.contentLoadedHandler();
	});
}
