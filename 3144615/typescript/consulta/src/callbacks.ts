type CallBack = () => void;

function pedirPizza(notificar: CallBack) {
    console.log("Toma pedido");
    console.log("Hace la pizza");
    notificar();
}

function sms() {
    console.log("Manda un SMS");
}

function email() {
    console.log("Manda un email");
}

function whastapp() {
    console.log("Manda un whastapp");
}

function cositoQueVibra() {
    console.log("Vibra el cosito");
}

pedirPizza(sms);
pedirPizza(email);
pedirPizza(whastapp);
pedirPizza(cositoQueVibra);

pedirPizza(() => {});
