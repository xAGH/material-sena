const loadBtn = document.getElementById("load-btn");
const container = document.getElementById("container");
const spinner = document.getElementById("spinner");

export async function initApp(callback) {
    loadBtn.addEventListener("click", async () => {
        spinner.classList.remove("hide");
        spinner.classList.add("show");
        try {
            const todos = await callback();
            spinner.classList.remove("show");
            spinner.classList.add("hide");
            render(todos);
        } catch {
            console.log("Error");
        }
    });
}

function getCard(todo) {
    const status = todo.completed ? "Completado" : "Pendiente";
    const style = todo.completed ? "completed" : "pending";
    return `<div class="todo-card">
                <div class="todo-header">
                    <span class="todo-id">#${todo.id}</span>
                </div>

                <h3 class="todo-title">${todo.title}</h3>

                <div class="todo-footer">
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
