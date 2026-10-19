type Rol = "admin" | "editor" | "visitante";

interface Usuario {
  nombre: string;
  edad: number;
  estaActivo: boolean;
  rol: Rol;
}

function filtrarUsuarios(usuarios: Usuario[]) {
  return usuarios.filter(
    (usuario) =>
      usuario.estaActivo && usuario.edad >= 18 && usuario.rol !== "visitante",
  );
}
