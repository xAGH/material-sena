const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const utiles: string[] = ["Lapiz", "Borrador", "Cuaderno"];

utiles.map((value: string, index: number) => `${index + 1}. ${value}`);

function alCuadrado(num: number): number {
  return num ** 2;
}

const numerosAlCUadrado = nums.map((num: number, index: number) => num ** 2);
// Se recibe: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Se retorna: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

const numerosPares = nums.filter((num: number) => num % 2 === 0);
// Se recibe: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Se retorna: [2, 4, 6, 8, 10]

const num5 = nums.find((num: number) => num === 5);
// Se recibe: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Se retorna: 5

const noSe = nums.find((num: number) => num === 15);
// Se recibe: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Se retorna: undefined

// For Each, itera sobre cada elemento y aplica la función
nums.forEach((num: number) => {
  console.log(num);
});

for (const num of nums) {
  console.log(num);
}

const promedio = nums.reduce((acc: number, cur: number) => {
  const sum = acc + cur;
  return sum;
}, 0);
