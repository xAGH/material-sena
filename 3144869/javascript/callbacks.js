function obtenerNombre() {
    // Que hace un proceso que nos retorna un nombre
}

function imprimir(name) {
    console.log(`Hola ${name}`);
    return true;
}

function estudiar(name) {
    console.log(`${name} está estudiando`);
    return true;
}

function interactuar(callback) {
    const nombre = obtenerNombre();
    callback(nombre);
}

interactuar(imprimir);
interactuar(estudiar);

function pedirPizza(avisar) {
    console.log("Hola una pizza por favor");
    // Hace proceso de la pizza
    avisar();
}

function llamar() {}
function sms() {}
function email() {}

pedirPizza(llamar);
pedirPizza(sms);
pedirPizza(email);
