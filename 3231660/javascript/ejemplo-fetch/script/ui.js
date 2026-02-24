export function addEvents(onLoad) {
    const btn = document.getElementById("load-characters-btn");
    btn.addEventListener("click", async () => {
        await onLoad();
    });
}

function getCard(character) {
    return `<div class="character-card">
            <div class="character-header">
                <span>${character.id}</span>
                <h2 class="character-name">${character.name}</h2>
                <span class="character-badge">${character.sex}</span>
            </div>

            <div class="character-body">
                <ul class="character-info">
                    <li><strong>Ocupación:</strong>${character.ocupation}</li>
                    <li><strong>Edad:</strong>${character.age}</li>
                    <li><strong>Episodios:</strong>${character.episodes}</li>
                </ul>
            </div>
        </div>`;
}

export function render(characters) {
    const cardsContainer = document.getElementById("cards-container");

    for (let character of characters) {
        const card = getCard(character);

        cardsContainer.innerHTML += card;
    }
}
