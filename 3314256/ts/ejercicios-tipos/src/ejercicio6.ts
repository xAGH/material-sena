type TipoCalificacion = "tareas" | "quices" | "examen";

interface Calificación {
  estudianteId: string;
  materia: string;
  categoria: TipoCalificacion;
  nota: number;
}

function promedioParaEstudiante(
  calificaciones: Calificación[],
  estudianteId: string,
) {
  const calificacionesDeEstudiante = calificaciones.filter(
    (calificacion) => calificacion.estudianteId === estudianteId,
  );

  const sumas = calificacionesDeEstudiante.reduce(
    (acc, cur) => {
      if (cur.categoria === "examen") {
        acc.examen += cur.nota;
      } else if (cur.categoria === "quices") {
        acc.quices += cur.nota;
      } else {
        acc.tareas += cur.nota;
      }
      return acc;
    },
    { tareas: 0, quices: 0, examen: 0 },
  );

  const filtrarPorCategoria = (categoria: string) =>
    calificacionesDeEstudiante.filter(
      (calificacion) => calificacion.categoria === categoria,
    ).length;

  const cantidadTareas = filtrarPorCategoria("tareas");
  const cantidadQuices = filtrarPorCategoria("quices");
  const cantidadExamen = filtrarPorCategoria("examen");

  return {
    tareas: sumas.tareas / cantidadTareas,
    quices: sumas.quices / cantidadQuices,
    examen: sumas.examen / cantidadExamen,
  };
}

const calificacionesPrueba: Calificación[] = [
  // est-1: todas las categorías, varias materias
  {
    estudianteId: "est-1",
    materia: "Matemáticas",
    categoria: "tareas",
    nota: 4.0,
  },
  {
    estudianteId: "est-1",
    materia: "Matemáticas",
    categoria: "tareas",
    nota: 3.0,
  },
  {
    estudianteId: "est-1",
    materia: "Matemáticas",
    categoria: "quices",
    nota: 5.0,
  },
  {
    estudianteId: "est-1",
    materia: "Matemáticas",
    categoria: "quices",
    nota: 4.0,
  },
  {
    estudianteId: "est-1",
    materia: "Historia",
    categoria: "examen",
    nota: 3.5,
  },
  {
    estudianteId: "est-2",
    materia: "Historia",
    categoria: "tareas",
    nota: 5.0,
  },
  // est-2: solo examen, notas extremas
  { estudianteId: "est-2", materia: "Física", categoria: "quices", nota: 0 },
  { estudianteId: "est-2", materia: "Física", categoria: "examen", nota: 5.0 },
];

// Resultados esperados (según la intención de la función):
// est-1 -> { tareas: 3.5, quices: 4.5, examen: 3.5 }
// est-2 -> { tareas: 5, quices: NaN, examen: NaN }
// est-3 -> { tareas: NaN, quices: NaN, examen: 2.5 }
// est-4 (no existe) -> { tareas: NaN, quices: NaN, examen: NaN }

console.log(promedioParaEstudiante(calificacionesPrueba, "est-1"));
