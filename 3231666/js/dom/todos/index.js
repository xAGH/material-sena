function addTodo() {
    const name = document.getElementById("todo-name").value;
    const status = document.getElementById("todo-status").value;

    if (!name) return;

    let backgroundClass = "";
    switch (status) {
        case "PENDIENTE":
            backgroundClass = "pending";
            break;
        case "EN_PROCESO":
            backgroundClass = "in-progress";
            break;
        case "FINALIZADO":
            backgroundClass = "completed";
            break;
    }

    const todo = document.createElement("span");
    todo.textContent = name;
    todo.classList.add("card", backgroundClass);

    const container = document.getElementById("todos-list");
    container.appendChild(todo);
}
