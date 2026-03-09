import { getState, setState } from "./state.js";
import { loadUsers } from "./service.js";

async function changePage(newPage) {
    setState("page", newPage);
    await loadUsers();
    render();
}

export function addPrevPageBtnEvent() {
    const btn = document.getElementById("prevBtn");
    btn.addEventListener("click", async () => {
        const page = getState("page");
        changePage(page - 1 > 0 ? page - 1 : 0);
    });
}

export function addNextPageBtnEvent() {
    const btn = document.getElementById("nextBtn");
    btn.addEventListener("click", async () => {
        const page = getState("page");
        const total = getState("total");
        const limit = getState("limit");
        const maxPages = Math.ceil(total / limit) - 1;
        const newPage = page + 1;
        changePage(maxPages > newPage ? newPage : maxPages);
    });
}

function getUserCard(user) {
    return `
    <div class="user-card">
        <img class="avatar" src="${user.image}" alt="user image">

        <h2>${user.firstName} ${user.lastName}</h2>
        <p class="username">@${user.username}</p>

        <div class="info">
          <p><strong>Edad:</strong> ${user.age}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Teléfono:</strong> ${user.phone}</p>
          <p><strong>Ciudad:</strong> ${user.address.city}, ${user.address.country}</p>
          <p><strong>Empresa:</strong> ${user.company.name}</p>
          <p><strong>Rol:</strong> ${user.role}</p>
        </div>

      </div>`;
}

export function render() {
    const container = document.getElementById("container");
    container.innerHTML = "";

    const users = getState("users");
    users.forEach((user) => {
        container.innerHTML += getUserCard(user);
    });
}
