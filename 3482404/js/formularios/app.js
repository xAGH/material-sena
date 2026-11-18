function setup() {
    const form = document.getElementById("form-registro");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(form)
        const usuario = Object.fromEntries(formData);

        const errors = {
            nombre: validarNombre(usuario.nombre),
            correo: validarCorreo(usuario.correo),
            edad: validarEdad(usuario.edad),
            password: validarPassword(usuario.password),
            confirmar: validarConfirmacion(usuario.password, usuario.confirmar),
        }

        for (const [campo, error] of Object.entries(errors)) {
            if (error.trim()) {
                mostrarError(campo, error)
            } else {
                marcarValido(campo)
            }
        }

        console.log(errors)

    })

    document.getElementById("profesion").addEventListener("blur", (event) => {
        const value = event.target.value;

        if (value.toLowerCase() !== "programador") {
            mostrarError("profesion", "La profesión debe ser Programador")
        } else {
            marcarValido("profesion")
        }
        console.log("COUNTER")
    })
}

// function obtenerControlesManualmente() {
//     // Controles
//     const nombre = document.querySelector("#nombre").value.trim();
//     const edad = Number(document.querySelector("#edad").value);
//     const programa = document.querySelector("#programa").value;
//     const aceptaTerminos = document.querySelector("#terminos").checked;
//     const jornadaMarcada = document.querySelector('input[name="jornada"]:checked');
//     const jornada = jornadaMarcada ? jornadaMarcada.value : "";

// }

function mostrarError(idCampo, mensaje) {
    const campo = document.querySelector(`#${idCampo}`);
    const error = document.querySelector(`#error-${idCampo}`);

    campo?.classList.add("input-error");
    campo?.classList.remove("input-valido");
    error.textContent = mensaje;
}

function marcarValido(idCampo) {
    const campo = document.querySelector(`#${idCampo}`);
    const error = document.querySelector(`#error-${idCampo}`);

    campo?.classList.remove("input-error");
    campo?.classList.add("input-valido");
    error.textContent = "";
}

function validarNombre(valor) {
    if (valor === "") return "El nombre es obligatorio";
    if (valor.length < 3) return "Debe tener al menos 3 caracteres";
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(valor)) return "Solo se permiten letras y espacios";
    return "";
}

function validarCorreo(valor) {
    if (valor === "") return "El correo es obligatorio";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) return "El formato del correo no es válido";
    return "";
}

function validarEdad(valor) {
    if (valor === "") return "La edad es obligatoria";
    const edad = Number(valor);
    if (!Number.isInteger(edad)) return "La edad debe ser un número entero";
    if (edad < 14 || edad > 99) return "La edad debe estar entre 14 y 99 años";
    return "";
}

function validarPassword(valor) {
    if (valor.length < 8) return "Debe tener al menos 8 caracteres";
    if (!/\d/.test(valor)) return "Debe incluir al menos un número";
    if (!/[A-Z]/.test(valor)) return "Debe incluir al menos una mayúscula";
    return "";
}

function validarConfirmacion(password, confirmacion) {
    if (confirmacion === "") return "Debe confirmar la contraseña";
    if (password !== confirmacion) return "Las contraseñas no coinciden";
    return "";
}

setup()