interface Volador {
    alas: number
    volar(): void
}

class Gaviota implements Volador {
    alas: number = 2;

    volar(): void {
        
    }
}

interface Trabajador {
    salario: number

    trabaja(): void;
    descansa(): void

}

class Coordinador implements Trabajador {
    salario = 3000000

    trabaja(): void {
        console.log("Trabaja coordinando")
    }

    descansa(): void {
        console.log("Ve peliculas")
    }
}


class Aseador implements Trabajador {
    salario = 2000000

    trabaja(): void {
        console.log("Trabaja aseando")
    }

    descansa(): void {
        console.log("Tomando cafe")
    }
}

class Profesor implements Trabajador {
    salario = 1000000

    trabaja(): void {
        console.log("Trabaja enseñando sentado")
    }

    descansa(): void {
        console.log("Jugando videojuegos")
    }
}


abstract class Animal {

    nombre: string = "";
    especie: string = "";

    comen() {
        console.log("Por la boca")
    }

    abstract desplazan(): void

}

class Perro extends Animal {
    desplazan() {
        console.log("El perro camina")
    }
}

class Cuervo extends Animal {
    desplazan() {
        console.log("El cuervo camina y vuela")
    }
}

const usuario = {
    id: 1,
    nombre: "Alejo"
}

const { id, nombre } = usuario;

enum Color {
    RED, BLUE, GREEN
}

enum Talla {
    XS = "Talla xs",
    S = "Talla s",
    M = "Talla m",
    L = "Talla l",
    XL = "Talla xl",
    XXL = "Talla xxl",
    XXXL = "Talla xxxl"
}

interface Ropa {
    talla: Talla,
    color: Color
}

const ropa: Ropa = {
    talla: Talla.XS,
    color: Color.GREEN
}

const numeros = [1,2,3,4,5,6]

numeros.forEach(() => {})