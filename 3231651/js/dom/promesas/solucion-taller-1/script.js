const users = [
    {
        id: 1,
        name: "Juan Pérez",
        email: "juan.perez@example.com",
    },
    {
        id: 2,
        name: "María Gómez",
        email: "maria.gomez@example.com",
    },
    {
        id: 3,
        name: "Carlos Rodríguez",
        email: "carlos.rodriguez@example.com",
    },
    {
        id: 4,
        name: "Laura Martínez",
        email: "laura.martinez@example.com",
    },
    {
        id: 5,
        name: "Andrés López",
        email: "andres.lopez@example.com",
    },
];

const idInput = document.getElementById("idInput");
const searchButton = document.getElementById("searchButton");
const userContainer = document.getElementById("userContainer");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const errorMessage = document.getElementById("errorMessage");
const loading = document.getElementById("loading");

function searchUser(userId) {
    return new Promise((res, rej) => {
        searchButton.disabled = true;
        loading.classList.remove("hide");

        setTimeout(() => {
            const user = users.find((user) => user.id === userId);

            if (user === undefined) {
                rej("Usuario no encontrado");
            } else {
                res(user);
            }
        }, 2000);
    });
}

function onClick() {
    const id = Number(idInput.value);

    if (!/^\d+$/.test(id)) {
        errorMessage.classList.remove("hide");
        errorMessage.textContent = "Solo se permiten números positivos";
        return;
    }

    searchUser(id)
        .then((user) => {
            userContainer.classList.remove("hide");
            userName.textContent = user.name;
            userEmail.textContent = user.email;
        })
        .catch((message) => {
            errorMessage.classList.remove("hide");
            errorMessage.textContent = message;
        })
        .finally(() => {
            loading.classList.add("hide");
            searchButton.disabled = false;
        });
}
