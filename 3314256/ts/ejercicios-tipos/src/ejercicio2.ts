/*
2. Agrupación por tipo de transacción
Define un tipo Transacción que contenga el monto, el tipo ("ingreso" o "egreso") y
la categoría.
Crea una función que reciba un arreglo de transacciones y retorne un objeto que
contenga la suma total agrupada por tipo.
Ejemplo de salida esperada:
*/

type TipoTransaccion = "ingreso" | "egreso";

interface Transaccion {
  monto: number;
  tipo: TipoTransaccion;
  categoria: string;
}

function filtrarPorTipo(transacciones: Transaccion[]) {
  return transacciones.reduce(
    (sumas, transaccion) => {
      if (transaccion.tipo === "ingreso") {
        sumas.ingreso += transaccion.monto;
      } else {
        sumas.egreso += transaccion.monto;
      }
      return sumas;
    },
    { ingreso: 0, egreso: 0 },
  );
}

const transaccionesPrueba: Transaccion[] = [
  { monto: 2500000, tipo: "ingreso", categoria: "salario" },
  { monto: 350000, tipo: "ingreso", categoria: "freelance" },
  { monto: 120000, tipo: "ingreso", categoria: "venta" },
  { monto: 800000, tipo: "egreso", categoria: "arriendo" },
  { monto: 250000, tipo: "egreso", categoria: "mercado" },
  { monto: 90000, tipo: "egreso", categoria: "transporte" },
  { monto: 45000, tipo: "egreso", categoria: "entretenimiento" },
  { monto: 60000, tipo: "egreso", categoria: "servicios" },
];

console.log(filtrarPorTipo(transaccionesPrueba));
