function sumaTipoEnLinea(num1: number, num2: number): number {
  return num1 + num2;
}

type Fn = (n1: number, n2: number) => number;

const suma: Fn = (a, b) => {
  return a + b;
};

const resta: Fn = (a, b) => {
  return a - b;
};

const multiplicacion: Fn = (a, b) => {
  return a * b;
};

const division: Fn = (a, b) => {
  return a / b;
};
