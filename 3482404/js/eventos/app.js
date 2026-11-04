const btnGreeting = document.querySelector("#btn-greeting");
const pMessage = document.querySelector("#p-message");
const inputTest = document.querySelector("#input-test");

btnGreeting.addEventListener("mouseleave", (e) => {
    pMessage.textContent = "¡Hola! Hiciste clic en el botón";
    console.log("Evento: ", e)
})

inputTest.addEventListener("keydown", (e) => {
    e.preventDefault();
    console.log(e.key);
})

const campoNombre = document.querySelector("#campo-nombre");
const selectCiudad = document.querySelector("#select-ciudad");
const vistaPrevia = document.querySelector("#vista-previa");

// "input": se dispara cada vez que cambia el contenido (en cada tecla)
campoNombre.addEventListener("input", (e) => {
  vistaPrevia.textContent = `Hola,${e.target.value}`;
});

// "change": se dispara cuando se confirma el cambio (al seleccionar una opción o salir del campo)
selectCiudad.addEventListener("change", (e) => {
  console.log(`Ciudad seleccionada:${e.target.value}`);
});

// "focus" y "blur": cuando el campo recibe o pierde el foco
campoNombre.addEventListener("focus", () => campoNombre.classList.add("activo"));
campoNombre.addEventListener("blur", () => campoNombre.classList.remove("activo"));

document.addEventListener("DOMContentLoaded", () =>  console.log("El documento está listo"))