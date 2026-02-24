import { addEvents, render } from "./ui.js";
import { getCharacters, formatCharacters } from "./service.js";

async function loadData() {
    const characters = await getCharacters();
    const formattedCharacters = formatCharacters(characters);
    render(formattedCharacters);
}

function initApp() {
    addEvents(loadData);
}

initApp();
