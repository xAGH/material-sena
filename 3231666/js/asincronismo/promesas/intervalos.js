let counter = 0;

const intervalId = setInterval(() => {
    const span = document.createElement("p");
    span.textContent = `Span ${counter++}`;
    span.id = counter;
    document.body.appendChild(span);
}, 2000);

setTimeout(() => clearInterval(intervalId), 10000);
