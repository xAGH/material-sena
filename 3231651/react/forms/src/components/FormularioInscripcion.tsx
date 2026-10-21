import { useState, type ChangeEvent, type SubmitEvent } from "react";
import "./FormularioInscripcion.css";

type Jornada = "maniana" | "tarde" | "noche";

interface Inscripcion {
    nombre: string;
    correo: string;
    curso: string;
    jornada: Jornada;
    aceptaDatos: boolean;
}

const formularioInicial: Inscripcion = {
    nombre: "",
    correo: "",
    curso: "",
    jornada: "maniana",
    aceptaDatos: false,
};

type Errores = Partial<Record<keyof Inscripcion, string>>;

function validar(datos: Inscripcion): Errores {
    const errores: Errores = {};
    if (datos.nombre.trim().length < 3) errores.nombre = "Escribir el nombre completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo)) errores.correo = "Escribir un correo válido.";
    if (datos.curso === "") errores.curso = "Elegir un curso.";
    if (!datos.aceptaDatos) errores.aceptaDatos = "Hay que aceptar el tratamiento de datos.";
    return errores;
}

export function FormularioInscripcion() {
    const [datos, setDatos] = useState<Inscripcion>(formularioInicial);
    const [errores, setErrores] = useState<Errores>({});

    function cambiar(evento: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { name, value } = evento.target;
        setDatos((anterior) => ({ ...anterior, [name]: value }));
    }

    function cambiarCasilla(evento: ChangeEvent<HTMLInputElement>) {
        const { name, checked } = evento.target;
        setDatos((anterior) => ({ ...anterior, [name]: checked }));
    }

    function enviar(evento: SubmitEvent<HTMLFormElement>) {
        evento.preventDefault();
        const errores = validar(datos);
        setErrores(errores);
        if (Object.keys(errores).length > 0) return;
        console.log("Inscripción enviada", datos);
        setDatos(formularioInicial);
    }

    return <form onSubmit={enviar}>
        <label htmlFor="nombre">Nombre</label>
        <input onChange={cambiar} name="nombre" type="text" />
        <label htmlFor="correo">Email</label>
        <input onChange={cambiar} name="correo" type="email" />
        <label htmlFor="curso">Curso</label>
        <input onChange={cambiar} name="curso" type="text" />
        <label htmlFor="jornada">Jornada</label>
        <select onChange={cambiar} name="jornada">
            <option value="maniana">Mañana</option>
            <option value="tarde">Tarde</option>
            <option value="noche">Noche</option>
        </select>
        <label htmlFor="aceptaDatos">Acepta términos y condiciones</label>
        <input onChange={cambiarCasilla} name="aceptaDatos" type="checkbox" />
        <button type="submit">Imprimir datos</button>
    </form>
}