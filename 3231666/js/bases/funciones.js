function sumar1(a, b) {
    return a + b;
}

const sumar2 = function (a, b) {
    return a + b;
};

const sumar3 = (a, b) => {
    return a + b;
};

const sumar4 = (a, b) => a + b;

console.log(sumar1(1, 3));
console.log(sumar2(2, 2));
console.log(sumar3(1, 1));
console.log(sumar4(1, 5));
