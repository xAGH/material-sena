let tasks = [];

function setup() {
    const btnAddTask = document.getElementById("btn-add-task");
    const taskList = document.getElementById("task-list");

    btnAddTask.addEventListener("click", () => {
        const inputTask = document.getElementById("input-task");
        const value = inputTask.value;

        if (value.trim() === "") return

        tasks.push({ name: value, completed: false, id: crypto.randomUUID() })
        inputTask.value = null;
        refreshList();
        updateCounter();
    })

    taskList.addEventListener("click", (event) => {
        const name = event.target.name;
        if (name === "btn-complete") completeTask(event.target);
        else if (name === "btn-delete") deleteTask(event.target);
    })
}

function updateCounter() {
    const spanTotal = document.getElementById("span-total")
    const spanCopmpleted = document.getElementById("span-completed")
    const spanPending = document.getElementById("span-pending")

    const total = tasks.length
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    spanTotal.textContent = `Total de tareas: ${total}`;
    spanCopmpleted.textContent = `Completadas: ${completed}`;
    spanPending.textContent = `Pendientes: ${pending}`;

}

function completeTask(btn) {
    const taskId = btn.dataset.taskId;
    const li = btn.closest("li")
    btn.disabled = true;
    li.classList.add("completed");
    tasks = tasks.map((task) => {
        if (task.id === taskId) {
            return {
                ...task,
                completed: true
            }
        }
        return task
    })
    updateCounter();
}

function deleteTask(btn) {
    const taskId = btn.dataset.taskId;
    const li = btn.closest("li")
    li.remove();
    tasks = tasks.filter((task) => task.id !== taskId);
    updateCounter();
}

function refreshList() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""

    tasks.forEach((task) => {
        const li = document.createElement("li");
        const btnComplete = document.createElement("button");
        const btnDelete = document.createElement("button");

        li.textContent = task.name;
        btnComplete.textContent = "Completar";
        btnDelete.textContent = "Eliminar";
        btnComplete.name = "btn-complete"
        btnDelete.name = "btn-delete"

        btnDelete.dataset.taskId = task.id;
        btnComplete.dataset.taskId = task.id;

        li.append(btnComplete, btnDelete);
        taskList.append(li);
    })
}

setup();