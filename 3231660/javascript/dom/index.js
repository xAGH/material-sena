/* for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    const facebookLink = document.createElement("a");
    facebookLink.href = "https://feacebook.com";
    facebookLink.textContent = "Ir al face";
    div.className = "square";
    div.appendChild(facebookLink);
    document.body.appendChild(div);
    const br = document.createElement("br");
    document.body.appendChild(br);
}
 */

let counter = 0;
const span = document.getElementById("counter");

function refreshValue() {
    span.textContent = counter;
}

function decrement() {
    counter--;
    refreshValue();
}

function increment() {
    counter++;
    refreshValue();
}

function clearCounter() {
    counter = 0;
    refreshValue();
}
