const button = document.getElementById("click-me-btn");
button.textContent = "Modificado desde js";

function alertar() {
    alert("Se dio click al botón");
    const linkFace = document.createElement("a");
    linkFace.href = "https://facebook.com";
    linkFace.textContent = "Ir a Facebook";

    const div = document.createElement("div");
    div.className = "card";

    div.appendChild(linkFace);
    document.body.appendChild(div);
}
