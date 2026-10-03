type Function = (/* Parámetros tipados */) => {} /* Tipo retorno */;

function funcionesNombradas() {}

// Funciones anónimas
const funcionAnonima = function () {};

// Funciones anónimas flecha (arrow function)
const functionFlecha = () => {};

// Ejemplo
type FunctionSumar = (num1: number, num2: number) => number;

function sumar1(num1: number, num2: number): number {
  return num1 + num2;
}

const sumar2: FunctionSumar = function (num1, num2) {
  return num1 + num2;
};

const sumar3: FunctionSumar = (num1, num2) => {
  return num1 + num2;
};

const sumar4: FunctionSumar = (num1, num2) => num1 + num2;
