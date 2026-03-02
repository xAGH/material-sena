import { initApp } from "./ui.js";
import { getTodos } from "./service.js";

function start() {
    initApp(getTodos);
}

start();
