type OperacionTipo = (num1: number, num2: number) => number;

function sumar(num1: number, num2: number): number {
  return num1 + num2;
}

const sumar2 = function (num1: number, num2: number): number {
  return num1 + num2;
};

const sumar3 = (num1: number, num2: number): number => {
  return num1 + num2;
};

function restar(num1: number, num2: number): number {
  return num1 - num2;
}

function multiplicar(num1: number, num2: number): number {
  return num1 * num2;
}

function dividir(num1: number, num2: number): number {
  if (num2 <= 0) {
    throw new Error("El divisor no puede ser 0");
  }
  return num1 / num2;
}

function operar(num1: number, num2: number, operacion: OperacionTipo) {
  console.log("num1", num1);
  console.log("num2", num2);

  const res = operacion(num1, num2);

  console.log("resultado:", res);
}

operar(1, 2, multiplicar);
operar(1, 2, sumar);
operar(1, 2, restar);
operar(1, 2, dividir);

operar(1, 2, function multiplicar(n1: number, n2: number): number {
  return n1 * n2;
});
operar(1, 2, function (n1: number, n2: number): number {
  return n1 * n2;
});
operar(1, 2, (n1, n2) => n1 * n2);
