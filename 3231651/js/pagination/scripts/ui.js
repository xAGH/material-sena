import { getState } from "./state.js";

export function addPrevPageBtnEvent(action) {
    const btn = document.getElementById("prevBtn");
    btn.addEventListener("click", async () => {
        await action();
        render();
    });
}

export function addNextPageBtnEvent(action) {
    const btn = document.getElementById("nextBtn");
    btn.addEventListener("click", async () => {
        await action();
        render();
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
