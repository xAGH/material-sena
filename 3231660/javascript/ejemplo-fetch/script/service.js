export function formatCharacters(data) {
    const datosNecesarios = data.map((character) => {
        const episodesNumber = character.episodes.map((episodeUrl) => {
            const parts = episodeUrl.split("/");
            const episodeNumber = Number(parts.pop());
            return episodeNumber;
        });

        return {
            id: character.id,
            name: character.name,
            age: character.age,
            sex: character.sex,
            occupation: character.occupation,
            episodes: episodesNumber.length,
        };
    });

    return datosNecesarios;
}

export async function getCharacters() {
    const url = "https://spapi.dev/api/characters";

    try {
        const respuesta = await fetch(url);
        const characters = await respuesta.json();
        return characters.data;
    } catch (e) {
        console.log(e);
    }
}
