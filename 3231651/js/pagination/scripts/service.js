import { setState, getState } from "./state.js";

const URL = "https://dummyjson.com/users";

export async function loadUsers() {
    // Cálculo paginación
    const limit = getState("limit");
    const page = getState("page");
    const skip = limit * page;

    // Consulta
    const queryParams = `?limit=${limit}&skip=${skip}`;
    const res = await fetch(URL + queryParams);
    const data = await res.json();

    // Actualización de estado
    setState("users", data.users);
    setState("total", data.total);
}

export async function goNextPage() {
    const currentPage = getState("page");
    const total = getState("total");
    const limit = getState("limit");
    const totalPages = Math.ceil(total / limit);
    const newPage = currentPage + 1;
    const page = newPage < totalPages ? newPage : totalPages;
    setState("page", page);
    await loadUsers();
}

export async function goPrevPage() {
    const currentPage = getState("page");
    const newPage = currentPage - 1;
    const page = newPage < 0 ? 0 : newPage;
    setState("page", page);
    await loadUsers();
}
