let counter = 1;

function deleteCard() {}

function onButtonClick() {
    const container = document.getElementById("container");
    const card = document.createElement("div");
    card.addEventListener("click", () => {});
    card.textContent = counter;
    card.className = "card";
    container.appendChild(card);
    counter++;
}

// Ejemplo Callback
function sumar(num1, num2, callback) {
    const resultado = num1 + num2;
    callback(resultado);
}

function imprimir(resultado) {
    console.log(`El resultado de la suma es ${resultado}`);
}
