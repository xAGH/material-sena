type EstadoTarea = "pendiente" | "en_progreso" | "finalizada";

interface Tarea {
  id: number;
  descripcion: string;
  estaCompletada: boolean;
  estado: EstadoTarea;
}

const tareas: Tarea[] = [
  {
    id: 1,
    descripcion: "Sacar la basura",
    estaCompletada: false,
    estado: "en_progreso",
  },
];

function filtrarTareasNoCompletadas(tareas: Tarea[]): Tarea[] {
  return tareas.filter((tarea) => tarea.estado !== "finalizada");
}
