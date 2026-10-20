type Rol = "cliente" | "admin" | "visitante"
const rol: Rol = "cliente";

export function Conditional() {
    if (rol === "visitante") {
        return <h1>
            No tienes permisos para estar en esta sección
        </h1>
    }
    return <>
        <h1>Bienvenido {
            rol === "cliente" ? "Cliente" : "Admin"
        }</h1>
        {rol === "admin" && <p>Ir al panel de admin</p>}
    </>

}