abstract class Animal {

    comer() {
        console.log("Come por la boca")
    }

    abstract desplazarse(): void;

}

interface IAnimal {
    comer(): void;
    desplazarse(): void;
}

class Gato2 implements IAnimal {

    comer(): void {
        
    }

    desplazarse(): void {
        
    }

}

class Gato extends Animal {

    desplazarse(): void {
        console.log("El gato camina")
    }

}

class Gaviota extends Animal {

    desplazarse(): void {
        console.log("La gaviota camina y vuela")
    }

}

abstract class Usuario {
    abstract login(): void
}

class Administrador extends Usuario {
    login(): void {
        console.log("Correo y contraseña")
    }
}

class Cliente extends Usuario {
    login(): void {
        console.log("Número de teléfono")
    }
}

function iniciarSesion(usuario: Usuario) {
    usuario.login()
}

const cliente = new Cliente()
const administrador = new Administrador()

iniciarSesion(cliente)
iniciarSesion(administrador)