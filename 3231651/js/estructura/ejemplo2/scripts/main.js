import { addEvents } from "./ui.js";
import { getUsers } from "./service.js";

function start() {
    addEvents(getUsers);
}

start();
