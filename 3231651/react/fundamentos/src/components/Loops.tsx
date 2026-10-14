interface LoopsProps {
    data: string[]
}


export function Loops({ data }: LoopsProps) {

    return (
        <ul>
            {data.map((name, i) => <li key={i}>{name}</li>)}
        </ul>
    )

}

// trackBy = Angular
// key = React

// Lista de elementos con id:
// const items = [
//     { id: 1, name: "Manzana" },
//     { id: 2, name: "Pera" },
//     { id: 3, name: "Uva" },
//     { id: 4, name: "Mango" },
// ]