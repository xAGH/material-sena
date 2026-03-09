import { loadUsers } from "./service.js";
import { setState } from "./state.js";
import { addPrevPageBtnEvent, addNextPageBtnEvent, render } from "./ui.js";

async function startApp() {
    addPrevPageBtnEvent();
    addNextPageBtnEvent();
    await loadUsers();
    render();
}

startApp();
