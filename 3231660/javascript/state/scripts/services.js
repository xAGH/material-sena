import { setState } from "./state.js";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function loadUsers() {
    setState("loading", true);

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (err) {
        setState("error", "Error cargando usuarios");
    } finally {
        setState("loading", false);
    }
}

export function selectUser(userId, users) {
    const user = users.find((u) => u.id === userId);
    return user;
}
