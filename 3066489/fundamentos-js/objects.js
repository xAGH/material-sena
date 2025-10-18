const user = {
    name: "Alejo",
    age: 30,
    greeting: () => {},
};

const name1 = user.name;
const name2 = user["name"];

const { greeting } = user;

greeting();

const users = ["Alejo", "Pepe", "Juan"];

const [uno, dos, tres] = users;

// console.log(cuatro);

console.log(Object.values(user));
console.log(Object.keys(user));
console.log(Object.entries(user));
