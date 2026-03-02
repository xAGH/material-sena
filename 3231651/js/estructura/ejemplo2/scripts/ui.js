const loadBtn = document.getElementById("loadBtn");
const usersContainer = document.getElementById("usersContainer");
const errorMsg = document.getElementById("errorMsg");

export async function addEvents(callback) {
    loadBtn.addEventListener("click", async () => {
        errorMsg.textContent = "";
        usersContainer.innerHTML = "";

        try {
            const users = await callback();
            users.forEach((user) => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = getCard(user);
                usersContainer.appendChild(card);
            });
        } catch (error) {
            errorMsg.textContent = error.message;
        }
    });
}

function getCard(user) {
    return `
              <h3>${user.name}</h3>
              <p><strong>Usuario:</strong> ${user.username}</p>
              <p><strong>Email:</strong> ${user.email}</p>
              <p><strong>Ciudad:</strong> ${user.address.city}</p>
            `;
}
