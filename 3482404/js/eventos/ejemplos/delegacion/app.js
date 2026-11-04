const listaTareas = document.querySelector("#lista-tareas");
const tareas = ["Estudiar DOM", "Hacer el taller", "Repasar eventos"];

tareas.forEach((tarea, indice) => {
  const li = document.createElement("li");
  li.textContent = tarea;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.classList.add("btn-eliminar");
  btnEliminar.dataset.indice = indice;

  li.append(btnEliminar);
  listaTareas.append(li);
});

// Un solo listener en el contenedor
listaTareas.addEventListener("click", (e) => {
  // Se verifica si el clic fue en un botón de eliminar
  if (e.target.classList.contains("btn-eliminar")) {
    const item = e.target.closest("li");
    item.remove();
  }
});