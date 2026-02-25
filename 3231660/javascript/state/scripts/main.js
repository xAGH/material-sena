import { addClickClearBtn, addClickLoadBtn, render } from "./ui.js";
import { loadUsers } from "./services.js";
import { clearLocalStorage, getLocalStorageValue } from "./persistance.js";
import { clearState, setState } from "./state.js";

function initApp() {
    addClickLoadBtn(saveUserState);
    addClickClearBtn(clear);
    restoreState();
}

async function saveUserState() {
    const users = await loadUsers();
    setState("users", users);
    render();
}

function clear() {
    clearState();
    clearLocalStorage();
    render();
}

function restoreState() {
    const users = getLocalStorageValue("users");
    const selectedUser = getLocalStorageValue("selectedUser");

    if (users) setState("users", users);
    if (selectedUser) setState("selectedUser", selectedUser);
}

initApp();
