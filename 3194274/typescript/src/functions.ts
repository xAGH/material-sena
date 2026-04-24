// Clásicas
function sum1(num1: number, num2: number): number {
  return num1 + num2;
}

// Función anónima
const sum2 = function (num1: number, num2: number): number {
  return num1 + num2;
};

// Función anónima flecha
const sum3 = (num1: number, num2: number): number => {
  return num1 + num2;
};

// Función anónima flecha
const sum4 = (num1: number, num2: number): number => num1 + num2 / 2 + 1;
