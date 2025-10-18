const users = ["Alejo", "Juan", "Pepe"];

function iterar(name) {
    console.log(name);
}

users.forEach(iterar);

users.forEach((name) => {});

users.forEach(function (name) {
    console.log(name);
});
