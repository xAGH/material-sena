import { getState, setState } from "./state.js";
import { selectUser } from "./services.js";

const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");
const usersList = document.getElementById("usersList");
const selectedUserEl = document.getElementById("selectedUser");

export function addClickLoadBtn(onClick) {
    loadBtn.addEventListener("click", onClick);
}

export function addClickClearBtn(onClick) {
    clearBtn.addEventListener("click", onClick);
}

export function render() {
    usersList.innerHTML = "";

    const loading = getState("loading");
    const error = getState("error");
    const users = getState("users");
    const selectedUser = getState("selectedUser");

    if (loading) {
        usersList.innerHTML = "<li>Cargando...</li>";
        return;
    }

    if (error) {
        usersList.innerHTML = `<li>${error}</li>`;
        return;
    }

    users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user.name;
        li.addEventListener("click", () => {
            const userFound = selectUser(user.id, getState("users"));
            setState("selectedUser", userFound);
            render();
        });
        usersList.appendChild(li);
    });

    selectedUserEl.textContent = selectedUser
        ? JSON.stringify(selectedUser, null, 2)
        : "Ninguno";
}
