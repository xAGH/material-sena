const div = document.createElement("div");
const nameElement = document.createElement("span");
const ageElement = document.createElement("span");

nameElement.textContent = "Alejo";
nameElement.setAttribute("name", "name");
ageElement.textContent = 22;

div.appendChild(nameElement);
div.appendChild(ageElement);

div.className = "card";

document.body.appendChild(div);

const div1 = document.getElementById("card1");
const name1 = document.getElementById("name1");
const age1 = document.getElementById("age1");

name1.textContent = "Andrés";
name1.style.color = "red";
name1.style.textDecoration = "underline";
age1.textContent = 21;

div1.appendChild(name1);
div1.appendChild(age1);
div1.className = "card";

document.body.className = "space";

const refs = document.getElementsByName("name");

refs.forEach((el) => (el.style.color = "blue"));

/**
 *
 * @param {HTMLElement} el
 */
function onCardMouseEnter(el) {
    el.style.backgroundColor = "red";
    const div = document.createElement("div");
    const nameElement = document.createElement("span");
    const ageElement = document.createElement("span");

    nameElement.textContent = "Alejo";
    nameElement.setAttribute("name", "name");
    ageElement.textContent = 22;

    div.appendChild(nameElement);
    div.appendChild(ageElement);

    div.className = "card";

    div.addEventListener("click", () => {
        div.remove();
    });

    document.body.appendChild(div);
}

/**
 *
 * @param {HTMLElement} el
 */
function onCardMouseLeave(el) {
    el.style.backgroundColor = "aliceblue";
}
