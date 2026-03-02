export async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
        throw new Error("Error en la petición");
    }
    const datos = await response.json();
    return datos;
}
