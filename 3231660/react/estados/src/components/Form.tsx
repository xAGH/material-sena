import { useState, type ChangeEvent, type SubmitEvent } from "react";

export function NameField() {
    const [name, setName] = useState("");

    function change(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <>
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" value={name} onChange={change} />
            <p>Hola, {name || "aprendiz"}</p>
        </>
    );
}

interface InscriptionForm {
    name: string;
    age: number;
    program: "ADSO" | "Gestión documental" | "Enfermería";
    date: string;
    aceptTerms: boolean
}

const initialValue: InscriptionForm = {
    name: "",
    age: 0,
    program: "ADSO",
    date: "",
    aceptTerms: false
}

type Input = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

export function Form() {
    const [form, setForm] = useState<InscriptionForm>(initialValue);

    function change(event: ChangeEvent<Input>) {
        const { name, value } = event.target;
        setForm(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function changeCheckbox(event: ChangeEvent<HTMLInputElement>) {
        const { name, checked } = event.target;
        setForm(prev => {
            return {
                ...prev,
                [name]: checked
            }
        })
    }

    function validate(form: InscriptionForm) {
        let errors: any = {};
        if (!form.aceptTerms) {
            errors.aceptTerms = "Debe aceptar los términos"
        }

        return errors
    }

    function send(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(form)
        const errors = validate(form);
        if (errors) {/*...*/ }
        setForm(initialValue);
    }

    return (
        <form onSubmit={send} className="form">
            <label htmlFor="name">Nombre</label>
            <input
                id="name"
                name="name"
                value={form.name}
                onChange={change}
                required
            />

            <label htmlFor="age">Edad</label>
            <input
                id="age"
                name="age"
                type="number"
                min={0}
                value={form.age}
                onChange={change}
                required
            />

            <label htmlFor="program">Programa</label>
            <select
                id="program"
                name="program"
                value={form.program}
                onChange={change}
            >
                <option value="ADSO">ADSO</option>
                <option value="Gestión documental">Gestión documental</option>
                <option value="Enfermería">Enfermería</option>
            </select>

            <label htmlFor="date">Fecha</label>
            <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={change}
                required
            />

            <label htmlFor="aceptTerms" className="terms">
                <input
                    id="aceptTerms"
                    name="aceptTerms"
                    type="checkbox"
                    checked={form.aceptTerms}
                    onChange={changeCheckbox}
                />
                Acepto los términos y condiciones
            </label>

            <button type="submit" disabled={!form.aceptTerms}>
                Inscribirse
            </button>
        </form>
    );
}