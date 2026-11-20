const persona = {
    nombre: "Alejo",
    edad: 23,
}

console.log(persona.nombre)
console.log(persona.edad)

persona.nombre = "Alejandro"
persona.address = {
    city: "Armenia",
    street: "CRA 19"
}

console.log(persona["address"])

delete persona.address

// Operador de concatenación segura
// Si lo de la izquierda del ? es undefined, omite lo de la derecha
persona.address?.city // undefined

// Operador de coalescencia
// Si lo de la izquierda del ?? es undefined, retorna lo de la derecha
console.log(persona.address ?? "No tiene dirección")

const cuenta = {
    titular: "Jorge",
    saldo: 200000,

    depositar(valor) {
        this.saldo += valor;
        return this.saldo;
    },

    resumen() {
        return `${this.titular} tiene un saldo de $${this.saldo}`;
    }
};

console.log(cuenta.resumen())
cuenta.depositar(2000)
console.log(cuenta.resumen())


const configuracion = {
    tema: "oscuro",
    idioma: "es",
    notificaciones: true
};

for (const llave of Object.keys(configuracion)) {
    console.log(configuracion[llave])
}

for (const valor of Object.values(configuracion)) {
    console.log(valor)
}

for (const [llave, valor] of Object.entries(configuracion)) {
    console.log(`${llave} = ${valor}`)
}

// Operador spread ...


JSON.stringify({ name: "Alejo", age: 23 })