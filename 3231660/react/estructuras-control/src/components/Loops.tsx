export function Loops() {

    const names = ["Alejo", "Sutano", "Pepe", "Alejo"];

    const itemsNames = names.map((name, i) => <li key={name + i}>{name}</li>)

    return <ul>
        {itemsNames}
    </ul>

}