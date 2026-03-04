/* JSON.parse("true") = true
JSON.parse("[1,2,3]") = [1,2,3]
JSON.parse("{name: 'Alejo'}") = { name: 'Alejo' }

JSON.stringify({ name: 'Alejo' }) = "{name: 'Alejo'}"
 */

function addLocal() {
    const value = [1, 2, 3, 4];
    localStorage.setItem("name", JSON.stringify(value));
}

function addSession() {
    sessionStorage.setItem("name", "Alejo");
}

function print() {
    const value = localStorage.getItem("name");

    if (!value) {
        return;
    }

    const validJson = k

    console.log(`Valor de 'name'=${validJson}`);
    console.log(`Tipo de valor de 'name'=${typeof validJson}`);
}
