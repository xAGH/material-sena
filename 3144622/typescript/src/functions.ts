function sumar1(num1: number, num2: number): number {
    return num1 + num2;
}

const sumar2: (num1: number, num2: number) => number = function (
    num1: number,
    num2: number,
): number {
    return num1 + num2;
};

const sumar3: (num1: number, num2: number) => number = (
    num1: number,
    num2: number,
): number => {
    return num1 + num2;
};

const sumar4: (num1: number, num2: number) => number = (
    num1: number,
    num2: number,
): number => (num1 + num2 === 2 ? 1 : 0);
