class Persona {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  hi(): string {
    return `Hola, te saluda ${this._name}`;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get age(): number {
    return this._age;
  }

  set age(newAge: number) {
    this._age = newAge;
  }
}

const persona: Persona = new Persona("Alejo", 23);

console.log(persona.hi());

console.log(persona.name);
