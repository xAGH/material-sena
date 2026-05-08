type Status = "pendiente" | "en_progreso" | "finalizada";

type CambioUsuario = {
  tipo: "nombre" | "correo" | "contraseña";
};

const nombres = {
  prop1: 0,
  prop2: 0,
};

nombres.prop1 += 1;

const cambios: CambioUsuario[] = [
  {
    tipo: "nombre",
  },
  {
    tipo: "nombre",
  },
  {
    tipo: "correo",
  },
];

function getNotFinished(tasks: any[]) {
  return tasks.filter((t) => t.status !== "finalizada");
}
