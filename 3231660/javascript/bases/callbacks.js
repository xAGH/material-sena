function pedirPizza(callback) {
    console.log(`Pedir Pizza con Peperonni y Tomate`);
    callback("3013258495");
}

pedirPizza(() => {
    console.log(
        `La pizzeria me llama al número ${numero} y me dice que la pizza está lista`
    );
});
