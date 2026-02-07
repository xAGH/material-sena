function obtenerPokemonPromesa() {
    fetch("https://pokeapi.co/api/v2/pokemon").then((res) => {
        res.json().then((json) => {
            const onlyNames = json.results.map((pokemon) => pokemon.name);
            console.log(onlyNames);
        });
    });
}

async function obtenerPokemonAsync() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const pokemons = await res.json();
    const onlyNames = pokemons.results.map((pokemon) => pokemon.name);
    console.log(onlyNames);
}

obtenerPokemonAsync();
