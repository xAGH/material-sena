interface Persona<T> {
    talla: T;
}

const persona: Persona<string> = {
    talla: "",
};

const persona2: Persona<number> = {
    talla: 1,
};
