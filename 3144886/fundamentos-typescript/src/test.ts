class User {
    private name: string;
    private age: number;
    private isProffesor: boolean;

    constructor(name: string, age: number, isProffesor: boolean) {
        this.name = name;
        this.age = age;
        this.isProffesor = isProffesor;
    }

    sayHi() {
        console.log(`${this.name} dice hola!`);
    }
}

const user = new User("Alejo", 22, true);

user.sayHi();
