export async function getTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const allFieldsTodos = await response.json();
    const todos = allFieldsTodos.map((todo) => {
        return {
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
        };
    });
    return todos;
}
