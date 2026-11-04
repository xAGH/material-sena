const valor = document.querySelector("#valor");
const btnSumar = document.querySelector("#btn-sumar");
const btnRestar = document.querySelector("#btn-restar");
const btnReiniciar = document.querySelector("#btn-reiniciar");

let contador = 0;

function actualizarVista() {
  valor.textContent = contador;
  // Cambia el color si el número es negativo
  valor.classList.toggle("negativo", contador < 0);
}

btnSumar.addEventListener("click", () => {
  contador++;
  actualizarVista();
});

btnRestar.addEventListener("click", () => {
  contador--;
  actualizarVista();
});

btnReiniciar.addEventListener("click", () => {
  contador = 0;
  actualizarVista();
});