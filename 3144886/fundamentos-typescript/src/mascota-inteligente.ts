enum PetType {
    Dog = "DOG",
    Cat = "CAT",
    Bird = "BIRD",
}

interface PetInfo {
    name: string;
    type: PetType;
    age: number;
    breed: string;
}

abstract class Pet {
    private __petInfo: PetInfo;
    private __energy: number = 100;

    constructor(petInfo: PetInfo) {
        this.__petInfo = petInfo;
    }

    play(minutes: number) {
        if (this.__energy > 0) {
            this.__energy -= minutes;
            console.log(
                `El animal ${this.__petInfo.name} ha jugado ${minutes} minutos y ha quedado con ${this.__energy} energía`
            );
        } else {
            console.log(
                `El animal ${this.__petInfo.name} no tiene energía para jugar`
            );
        }
    }

    get info() {
        return this.__petInfo;
    }

    printInfo() {
        let message = "PetInfo(";
        message += `name=${this.__petInfo.name}, `;
        message += `age=${this.__petInfo.age}, `;
        message += `breed=${this.__petInfo.breed}, `;
        message += `type=${this.__petInfo.type}, `;
        message += `energy=${this.__energy}`;
        message += `)`;
        return `PetInfo()`;
    }

    abstract makeSound(): void;
    abstract feed(): void;
}

class Dog extends Pet {
    constructor(petInfo: PetInfo) {
        super(petInfo);
    }

    makeSound(): void {
        console.log(`El perro ${this.info.name} está ladrando`);
    }

    feed(): void {
        console.log(`El perro ${this.info.name} está comiendo`);
    }

    fetchBall(): void {
        console.log(`El perro ${this.info.name} trajo la pelota`);
    }
}

class Cat extends Pet {
    constructor(petInfo: PetInfo) {
        super(petInfo);
    }

    makeSound(): void {
        console.log(`El gato ${this.info.name} está maullando`);
    }

    feed(): void {
        console.log(`El gato ${this.info.name} está comiendo`);
    }
}

async function simulateActivity(pet: Pet, minutes: number) {
    console.log(`${pet.info.type} con nombre ${pet.info.name} empezó a jugar`)
    pet.makeSound()
    const activity = new Promise((resolve) => {
        setTimeout(() => {resolve(null)}, 2000)
    })
    await activity
    pet.play(minutes)
    pet.feed()
    console.log(`${pet.info.type} con nombre ${pet.info.name} terminó a jugar`)
    
}

interface FlyingPet {
    fly(distance: number): void;
}

class Bird extends Pet implements FlyingPet {

    private __altitude: number = 0

    constructor(petInfo: PetInfo) {
        super(petInfo);
    }

    makeSound(): void {
        console.log(`El pájaro ${this.info.name} está cantando`);
    }

    feed(): void {
        console.log(`El pájaro ${this.info.name} está comiendo`);
    }

    fly(distance: number) {
        this.__altitude += distance;
        console.log(`El pájaro ${this.info.name}  ${distance} metros`);
    }

}

function main() {
    const dog = new Dog({
        age: 2,
        name: "Maik",
        breed: "Bulldog",
        type: PetType.Dog
    }); 
    const cat = new Cat({
        age: 1,
        name: "Maik2",
        breed: "Egipcio",
        type: PetType.Cat
    }) 
    const bird = new Bird({
        age: 3,
        name: "Maik3",
        breed: "Tucán",
        type: PetType.Bird
    })

    simulateActivity(dog, 50)

}

main()