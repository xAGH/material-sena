import { getState, setState } from "./state.js";

const URL = "https://dummyjson.com/users";

export async function loadUsers() {
    const limit = getState("limit");
    const page = getState("page");
    const skip = limit * page;
    const queryParams = `?limit=${limit}&skip=${skip}`;
    const res = await fetch(URL + queryParams);
    const data = await res.json();

    setState("users", data.users);
    setState("total", data.total);
}
