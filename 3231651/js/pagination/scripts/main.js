import { loadUsers, goPrevPage, goNextPage } from "./service.js";
import { render, addNextPageBtnEvent, addPrevPageBtnEvent } from "./ui.js";

async function startApp() {
    addPrevPageBtnEvent(goPrevPage);
    addNextPageBtnEvent(goNextPage);
    await loadUsers();
    render();
}

startApp();
