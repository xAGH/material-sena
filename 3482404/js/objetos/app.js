const producto = {
    nombre: "Mouse inalámbrico",
    precio: 45000,
    disponible: true,
    categorias: ["tecnología", "accesorios"],
    proveedor: {
        nombre: "TecnoPartes",
        ciudad: "Manizales"
    },
    direccion: {
        ciudad: "Armenia",
        calle: "8"
    }
};

const clave = "precio"

console.log(producto.nombre);
console.log(producto["precio"]);
console.log(producto[clave]);
console.log(producto.proveedor)

producto.nombre = "Mouse alámbrico"
producto.stock = 10
console.log(producto.nombre);
console.log(producto)

console.log(producto.direccion?.calle);

if (producto.direccion) {
    console.log("existe")
    console.log(producto.direccion.calle)
} else {
    console.log("no existe")
}

delete producto.precio

console.log(producto.precio)

const persona = {
    name: "Alejo",
    age: 23,
    walk: function () {
        console.log(`${this.name} está caminando`)
    },
    eat() {
        console.log(`${this.name} está comiendo`)
    },
}

persona.eat()

console.log(Object.keys(producto))
console.log(Object.values(producto))
console.log(Object.entries(producto))

for (const key of Object.keys(producto)) {
    console.log(key)
    console.log(producto[key])
}

for (const [clave, valor] of Object.entries(producto)) {
    console.log(`${clave}:${valor}`);
}

const persona2 = {
    name: "Alejo",
    age: 23,
    email: "alejo@test.com",
    profession: "instructor",
    city: "Armenia",
    address: "Calle x",
    experience: "1 año"
}

const name = "Alejo Giraldo"

// Spread operator = ...

const { name: nameObject, age, email, experience = "0 años", ...rest } = persona2;
console.log(nameObject)
console.log(age)
console.log(email)
console.log(experience)
console.log(rest)

function procesarPersona(persona) {
    return `${persona.name} - ${persona.city}`;
}

function procesarPersonaDestructurando({ name, city }) {
    return `${name} - ${city}`;
}

console.log(procesarPersona(persona2))
console.log(procesarPersonaDestructurando(persona2))

// Arrays de objetos
const productos = [
    { id: 1, nombre: "Teclado", precio: 85000, stock: 10 },
    { id: 2, nombre: "Monitor", precio: 650000, stock: 0 },
    { id: 3, nombre: "Mouse", precio: 45000, stock: 25 },
    { id: 4, nombre: "Audífonos", precio: 120000, stock: 5 }
];

console.log(productos.filter(producto => producto.stock > 0))
console.log(productos.map(producto => producto.nombre))

// Operaciones con JSON y objetos de js
const pedido = { id: 15, cliente: "Natalia", total: 130000 };

// Objeto → texto JSON
const textoJson = JSON.stringify(pedido);
console.log(textoJson);        // '{"id":15,"cliente":"Natalia","total":130000}'
console.log(typeof textoJson); // "string"

// Texto JSON → objeto
const objetoNuevo = JSON.parse(textoJson);
console.log(objetoNuevo); // "Natalia"
console.log(objetoNuevo.cliente); // "Natalia"