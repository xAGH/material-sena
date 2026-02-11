class Instructor {
    name = "Alejo";
    age = 22;
    groups = [651, 666, 660, 892];

    getName() {}
}

// Objetos de clase o instancia
const instructor = new Instructor();
instructor.age;
instructor.name;
instructor.groups;

// Objetos de prototipo
const instructorPrototipo = {
    name: "Alejo2",
    age: 22,
    groups: [651, 666, 660, 892],
    getName: () => {},
};

const instructorPrototipo2 = {
    name: "Alejo2",
    age: 22,
    schedule: "De 6 a 8",
    groups: [651, 666, 660, 892],
};

instructorPrototipo.groups;
instructorPrototipo["groups"];
