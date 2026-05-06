type Person = {
  name: string;
  age: number;
  phone: string;
};

const people: Person[] = [
  { name: "Carlos Pérez", age: 28, phone: "3001234567" },
  { name: "Ana Gómez", age: 24, phone: "3012345678" },
  { name: "Sofía Giraldo", age: 22, phone: "3056789012" },
  { name: "Luis Martínez", age: 35, phone: "3023456789" },
  { name: "María Rodríguez", age: 30, phone: "3034567890" },
  { name: "Jorge López", age: 40, phone: "3045678901" },
  { name: "Sofía Ramírez", age: 22, phone: "3056789012" },
  { name: "Diego Torres", age: 27, phone: "3067890123" },
  { name: "Laura Hernández", age: 33, phone: "3078901234" },
  { name: "Andrés Castro", age: 29, phone: "3089012345" },
  { name: "Valentina Díaz", age: 26, phone: "3090123456" },
];

const sofia = people.find((person: Person) => {
  return person.name.includes("Sofía");
});

// console.log(sofia);

// gte = greater than equal
const gte30 = people.filter((person: Person) => {
  return person.age >= 30;
});

people.forEach((person: Person) => {
  // console.log(person);
});

const prefix = people.map((person: Person) => {
  return { ...person, phone: "+57 " + person.phone };
});

console.log(prefix);

const sum = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

console.log(sum / people.length);
