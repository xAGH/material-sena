let counter = 0;

function refresh() {
    const span = document.getElementById("counter-display");
    span.textContent = counter;
}

function add(number) {
    counter += number;
    refresh();
}

function clearCounter() {
    counter = 0;
    refresh();
}
