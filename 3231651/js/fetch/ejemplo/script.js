const loadBtn = document.getElementById("load-btn");
const container = document.getElementById("container");
const spinner = document.getElementById("spinner");

loadBtn.addEventListener("click", async () => {
    spinner.classList.remove("hide");
    spinner.classList.add("show");
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    spinner.classList.remove("show");
    spinner.classList.add("hide");
    render(todos);
});

function getCard(todo) {
    const status = todo.completed ? "Completado" : "Pendiente";
    const style = todo.completed ? "completed" : "pending";
    return `<div class="todo-card">
                <div class="todo-header">
                    <span class="todo-id">#${todo.id}</span>
                </div>

                <h3 class="todo-title">${todo.title}</h3>

                <div class="todo-footer">
                    <span class="todo-user">Usuario: ${todo.userId}</span>
                    <span class="todo-status ${style}">${status}</span>
                </div>
            </div>`;
}

function render(todos) {
    todos.forEach((todo) => {
        const card = getCard(todo);
        container.innerHTML += card;
    });
}
