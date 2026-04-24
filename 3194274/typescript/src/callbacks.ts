// Función que se le pasa como parámetro a otra función

type Fn = () => void;

function pedirPizza(metodoContacto: Fn) {
  console.log("Empieza a hacer la pizza");
  console.log("Se demora 20 minutos");

  metodoContacto();
}

function suma(a: number, b: number): number {
  return a + b;
}

function resta(a: number, b: number): number {
  return a - b;
}

function multiplicacion(a: number, b: number): number {
  return a * b;
}

function division(a: number, b: number): number {
  if (b === 0) {
    throw new Error("No se puede dividir entre 0");
  }
  return a / b;
}

function logaritmo(base: number, exponente: number, baseLog: number): number {
  return 1;
}

type OperationFn = (a: number, b: number) => number;

function calcular(a: number, b: number, operation: OperationFn) {
  return operation(a, b);
}

calcular(1, 6, division);

calcular(1, 6, (num1: number, num2: number): number => num1 % num2);
