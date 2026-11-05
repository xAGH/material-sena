// ---------- Estado ----------
// Todo lo que se ve en pantalla sale de este objeto.
const data = {
    presupuesto: 0,
    filtro: "todos", // "todos" | "pendientes" | "comprados"
    listaProductos: [],
}

const NOMBRES_CATEGORIA = {
    lacteos: "Lácteos",
    granos: "Granos",
    proteinas: "Proteínas",
}

// ---------- Utilidades ----------
function formatearPesos(valor) {
    return "$" + valor.toLocaleString("es-CO")
}

// ---------- Persistencia (localStorage) ----------
function guardarDatos() {
    localStorage.setItem("lista-compras", JSON.stringify({
        presupuesto: data.presupuesto,
        listaProductos: data.listaProductos,
    }))
}

function cargarDatos() {
    const guardado = localStorage.getItem("lista-compras")
    if (!guardado) return

    const datos = JSON.parse(guardado)
    data.presupuesto = datos.presupuesto
    data.listaProductos = datos.listaProductos
}

// ---------- 1. Presupuesto ----------
function establecerPresupuesto() {
    const inputPresupuesto = document.getElementById("input-presupuesto")
    const presupuestoError = document.getElementById("span-error-presupuesto")
    const presupuesto = Number(inputPresupuesto.value)

    if (presupuesto > 0) {
        presupuestoError.textContent = ""
        data.presupuesto = presupuesto
        guardarDatos()
        renderResumen()
        return
    }

    presupuestoError.textContent = "El presupuesto ingresado no es válido"
}

// ---------- 3. Acciones sobre la lista ----------
function comprarProducto(id) {
    const producto = data.listaProductos.find(p => p.id === id)
    producto.comprado = true
    guardarDatos()
    renderTodo()
}

function eliminarProducto(id) {
    data.listaProductos = data.listaProductos.filter(p => p.id !== id)
    guardarDatos()
    renderTodo()
}

function eliminarComprados() {
    const confirmacion = confirm("¿Está seguro que quiere eliminar los productos comprados?")

    if (confirmacion) {
        data.listaProductos = data.listaProductos.filter(p => !p.comprado)
        guardarDatos()
        renderTodo()
    }
}

function cambiarFiltro(filtro) {
    data.filtro = filtro
    renderTodo()
}

// Delegación de eventos: un solo listener en el contenedor de la lista.
function manejarClickLista(evento) {
    const boton = evento.target
    const tarjeta = boton.closest(".producto")
    if (!tarjeta) return

    const id = Number(tarjeta.dataset.id)

    if (boton.name === "comprarBtn") {
        comprarProducto(id)
    } else if (boton.name === "eliminarBtn") {
        eliminarProducto(id)
    }
}

// ---------- Render ----------
function crearTarjetaProducto(producto) {
    const divContenedor = document.createElement("div")
    const spanNombre = document.createElement("span")
    const spanCategoria = document.createElement("span")
    const spanPrecio = document.createElement("span")
    const comprarBtn = document.createElement("button")
    const eliminarBtn = document.createElement("button")

    divContenedor.className = "producto"
    divContenedor.dataset.id = producto.id

    spanNombre.className = "producto-nombre"
    spanNombre.textContent = producto.nombre
    spanCategoria.className = "producto-categoria"
    spanCategoria.textContent = `(${NOMBRES_CATEGORIA[producto.categoria]})`
    spanPrecio.className = "producto-precio"
    spanPrecio.textContent = `${producto.cantidad} × ${formatearPesos(producto.precioUnitario)} = ${formatearPesos(producto.cantidad * producto.precioUnitario)}`

    comprarBtn.name = "comprarBtn"
    comprarBtn.className = "btn-comprar"
    eliminarBtn.name = "eliminarBtn"
    eliminarBtn.className = "btn-peligro"
    eliminarBtn.textContent = "Eliminar"

    if (producto.comprado) {
        divContenedor.classList.add("comprado")
        comprarBtn.textContent = "✓ Comprado"
        comprarBtn.disabled = true
    } else {
        comprarBtn.textContent = "Comprar"
    }

    divContenedor.append(spanNombre, spanCategoria, spanPrecio, comprarBtn, eliminarBtn)
    return divContenedor
}

function renderLista() {
    const divLista = document.getElementById("div-lista-productos")
    const mensajeVacio = document.getElementById("mensaje-vacio")

    divLista.textContent = ""

    // Se filtran los productos según el filtro activo
    const productosVisibles = data.listaProductos.filter(producto => {
        if (data.filtro === "pendientes") return !producto.comprado
        if (data.filtro === "comprados") return producto.comprado
        return true
    })

    productosVisibles.forEach(producto => {
        divLista.append(crearTarjetaProducto(producto))
    })

    mensajeVacio.hidden = productosVisibles.length > 0

    // Resaltar el filtro activo
    document.querySelectorAll(".btn-filtro").forEach(boton => {
        boton.classList.toggle("activo", boton.dataset.filtro === data.filtro)
    })
}

function renderResumen() {
    const total = data.listaProductos.length
    const comprados = data.listaProductos.filter(p => p.comprado).length
    const porcentaje = total === 0 ? 0 : Math.round((comprados / total) * 100)

    let gastado = 0
    let estimado = 0
    data.listaProductos.forEach(producto => {
        const subtotal = producto.cantidad * producto.precioUnitario
        estimado += subtotal
        if (producto.comprado) gastado += subtotal
    })

    document.getElementById("resumen-total").textContent = total
    document.getElementById("resumen-comprados").textContent = comprados
    document.getElementById("resumen-pendientes").textContent = total - comprados
    document.getElementById("resumen-porcentaje").textContent = `${porcentaje}%`
    document.getElementById("barra-progreso").value = porcentaje
    document.getElementById("resumen-gastado").textContent = formatearPesos(gastado)
    document.getElementById("resumen-presupuesto").textContent = formatearPesos(data.presupuesto)
    document.getElementById("resumen-estimado").textContent = formatearPesos(estimado)

    const supera = data.presupuesto > 0 && estimado > data.presupuesto
    document.getElementById("resumen-estimado").classList.toggle("error", supera)
    document.getElementById("aviso-presupuesto").hidden = !supera
}

function renderTodo() {
    renderLista()
    renderResumen()
}

// ---------- 2. Formulario ----------
function validarForm(evento) {
    evento.preventDefault()

    const inputNombre = document.getElementById("input-nombre")
    const inputCantidad = document.getElementById("input-cantidad")
    const inputPrecioUnitario = document.getElementById("input-precio-unitario")
    const selectCategoria = document.getElementById("select-categoria")
    const spanErrorForm = document.getElementById("error-formulario-agregar")

    const nombre = inputNombre.value.trim()
    const cantidad = Number(inputCantidad.value)
    const precioUnitario = Number(inputPrecioUnitario.value)
    const errores = []

    if (nombre === "") {
        errores.push("El nombre no puede ser vacío.")
    } else if (data.listaProductos.some(p => p.nombre.toLowerCase() === nombre.toLowerCase())) {
        errores.push("El producto ya se encuentra agregado.")
    }

    if (cantidad <= 0) {
        errores.push("La cantidad debe ser mayor que 0.")
    }

    if (precioUnitario <= 0) {
        errores.push("El precio unitario debe ser mayor que 0.")
    }

    if (errores.length > 0) {
        spanErrorForm.textContent = errores.join(" ")
        return
    }

    data.listaProductos.push({
        id: Date.now(), // número único para identificar el producto
        nombre: nombre,
        cantidad: cantidad,
        precioUnitario: precioUnitario,
        categoria: selectCategoria.value,
        comprado: false,
    })
    guardarDatos()

    evento.target.reset()
    inputNombre.focus()
    renderTodo()
}

function limpiarErrorFormulario() {
    document.getElementById("error-formulario-agregar").textContent = ""
}

// ---------- Inicio ----------
function setup() {
    cargarDatos()

    document.getElementById("input-presupuesto").value = data.presupuesto || ""

    document.getElementById("btn-fijar-presupuesto").addEventListener("click", establecerPresupuesto)

    const form = document.getElementById("form-agregar-productos")
    form.addEventListener("submit", validarForm)
    form.addEventListener("input", limpiarErrorFormulario)

    document.getElementById("div-lista-productos").addEventListener("click", manejarClickLista)
    document.getElementById("btn-eliminar-comprados").addEventListener("click", eliminarComprados)

    document.querySelectorAll(".btn-filtro").forEach(boton => {
        boton.addEventListener("click", () => cambiarFiltro(boton.dataset.filtro))
    })

    renderTodo()
}

setup()
