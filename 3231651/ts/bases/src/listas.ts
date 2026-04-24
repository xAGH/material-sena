const numeros: number[] = [167, 2, 3, 5, 6, 7, 8, 9, 10];

numeros.reduce((acc, cur) => {
  acc += cur;
  return acc;
}, 0);

// { ingreso: 0, egreso: 0 }
type Transaccion = {
  monto: number;
  tipo: "ingreso" | "egreso";
  categoria: string;
};

function sumaPorTipo(transacciones: Transaccion[]) {
  return transacciones.reduce(
    (acc, cur) => {
      if (cur.tipo === "ingreso") {
        acc.ingreso += cur.monto;
      } else {
        acc.egreso += cur.monto;
      }

      return acc;
    },
    { ingreso: 0, egreso: 0 },
  );
}
