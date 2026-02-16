const spinner = document.getElementById("spinner");
const btn = document.getElementById("btn");

function showSpinner() {
    return new Promise((res, rej) => {
        btn.classList.add("hide");
        spinner.classList.add("show");
        setTimeout(() => {
            spinner.classList.add("hide");
            spinner.classList.remove("show");

            btn.classList.remove("hide");
            btn.classList.add("show");

            btn.disabled = false;

            const numero = Math.random();

            if (numero > 0.5) {
                res("Encontro la consulta");
            } else {
                rej("No se encontró la consulta");
            }
        }, 2000);
    });
}

setTimeout(() => {
    spinner.textContent = "";
}, 3000);

setTimeout(() => {
    spinner.textContent = "";
}, 200);

setTimeout(() => {
    spinner.textContent = "";
}, 100);

btn.addEventListener("click", () => {
    showSpinner()
        .then((message) => {
            const result = document.getElementById("result");
            result.textContent = message;
        })
        .catch((err) => alert(err));
});
