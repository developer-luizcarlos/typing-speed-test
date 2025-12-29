import {initEvents} from "./dom/events.js";
import {loadProgressIfExists} from "./helpers/loadProgressIfExists.js";

function main() {
	loadProgressIfExists();

	initEvents();
}

main();
