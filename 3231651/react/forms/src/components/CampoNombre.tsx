import { useState, type ChangeEvent } from 'react';

function CampoNombre() {
    const [value, setValue] = useState("");

    function cambiar(evento: ChangeEvent<HTMLInputElement>) {
        setValue(evento.target.value);
    }

    return (
        <>
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" value={value} onChange={cambiar} />
            <p>Hola, {value || "aprendiz"}</p>
        </>
    );
}