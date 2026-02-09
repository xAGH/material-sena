function saludar(name: string): void {
    console.log(`Hola ${name}`);
}

function pedirPizza(
    numeroTelefono: number,
    callback: (param1: string) => void,
): void {
    console.log(`LLama al ${numeroTelefono}`);
}
