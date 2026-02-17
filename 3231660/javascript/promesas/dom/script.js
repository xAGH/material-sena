const btn = document.getElementById("btn");
const spinner = document.getElementById("spinner");

function searchUser(delayTime) {
    const number = Math.random();

    return new Promise((res, rej) => {
        btn.classList.add("hide");

        spinner.classList.remove("hide");
        spinner.classList.add("show");

        setTimeout(() => {
            number > 0.5 ? res() : rej();

            spinner.classList.add("hide");
            spinner.classList.remove("show");

            btn.classList.remove("hide");
            btn.classList.add("show");
        }, delayTime);
    });
}

function startSearch() {
    const delayInput = document.getElementById("delay");
    const delay = delayInput.value;

    searchUser(delay)
        .then(() => {
            const found = document.getElementById("found");
            found.classList.remove("hide");
            found.classList.add("show");
        })
        .catch(() => {
            alert("Usuario no encontrado");
        });
}
