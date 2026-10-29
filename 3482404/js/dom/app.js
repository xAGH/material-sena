// Seleccionar elementos
const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector(".descripcion");
const primerItem = document.querySelector("li");
const itemLista = document.querySelector("#lista-productos li");

const productos = document.querySelectorAll(".producto")

console.log(productos.length);

productos.forEach(producto => {
    console.log(producto.textContent);
});

const listaProductos = document.getElementById("lista-productos")
console.log(listaProductos)

// Modificar elementos
console.log(titulo.textContent)
titulo.textContent = "Clase ADSO 404"
console.log(titulo.textContent)

const contenedor = document.querySelector("#contenedor")
contenedor.innerHTML += `
    <h2>Título de mi contenedor</h2>
    <p>Lorem ipsum dolor sit amet</p>
`

const banner = document.querySelector("#banner");

// Leer y cambiar atributos directamente como propiedades
console.log(banner.src);
banner.src = "https://placehold.co/400"
banner.alt = "Promociones de temporada";

// Métodos genéricos para cualquier atributo
banner.setAttribute("title", "Ver promociones");
banner.setAttribute("width", "100px")

console.log(banner.getAttribute("title"));
console.log(banner.getAttribute("width"));
banner.removeAttribute("title");
console.log(banner.getAttribute("title"));


const botonComprar = document.querySelector("#btn-comprar")
console.log(botonComprar.dataset.id)
console.log(botonComprar.dataset.precio)

titulo.style.color = "#FF0000"
titulo.style.backgroundColor = "#000"
titulo.style.fontSize = "4rem"

const pDescripcion = document.querySelector(".descripcion");

pDescripcion.classList.add("destacado")
pDescripcion.classList.remove("destacado")

pDescripcion.classList.toggle("destacado")
pDescripcion.classList.toggle("destacado")
pDescripcion.classList.toggle("destacado")
pDescripcion.classList.toggle("destacado")


// Selecciona el ul
const lista = document.querySelector("#lista-productos");

// Creamos el producto (li)
const nuevoProducto = document.createElement("li")

// Configurando el producto
nuevoProducto.textContent = "Audífonos"
nuevoProducto.classList.add("producto")

lista.append(nuevoProducto); // al final
// lista.prepend(nuevoProducto); // al inicio

const liProducto = document.querySelector("#li-teclado")
liProducto.remove();

const productosNuevos = [
    { id: 1, nombre: "Teclado", precio: 85000 },
    { id: 2, nombre: "Monitor", precio: 650000 },
    { id: 3, nombre: "Mouse", precio: 45000 }
];

function generarTarjetas(productos) {
    const contenedor = document.querySelector("#contenedor")

    productos.forEach(({ nombre, precio }) => {
        const section = document.createElement("section")
        const pTitulo = document.createElement("p")
        const pPrecio = document.createElement("p")

        section.classList.add("tarjeta")
        pTitulo.textContent = nombre;
        pPrecio.textContent = `$${precio} COP`;
        const tono = precio > 50000 ? "tono-normal" : "tono-descuento";
        pPrecio.classList.add(tono)

        section.append(pTitulo, pPrecio)
        contenedor.append(section)
    })

}

generarTarjetas(productosNuevos)


const listaP = document.querySelector("#lista-productos");

console.log("children", listaP.children);            // Elementos hijos
console.log("firstElementChild", listaP.firstElementChild);   // Primer hijo
console.log("lastElementChild", listaP.lastElementChild);    // Último hijo
console.log("parentElement", listaP.parentElement);       // Elemento padre

const item = document.querySelector(".producto");
console.log(item.closest("ul"));        // Ancestro más cercano que coincide con el selector