interface ConditionsProps {
    condition: boolean
    rol: "ADMIN" | "CLIENT" | "USER"
}

// Valor de la verdad, siempre false cuando -> null, "", undefined, 0, false
// Operador ternario / elvis -> condition ? siEsTrue : siEsFalse

export function Conditions({ condition, rol }: ConditionsProps) {

    if (rol === "ADMIN") {
        return <h1>Es admin</h1>
    } else if (rol === "CLIENT") {
        return null
    }

    return (
        <>

            {
                condition && <h1>La condición es verdadera</h1>
            }

            {
                condition
                    ? <h1>La condición es verdadera</h1>
                    : <h1>La condición es falsa</h1>
            }
        </>
    )

}

