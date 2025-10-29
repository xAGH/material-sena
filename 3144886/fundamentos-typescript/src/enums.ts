enum Color {
  Rojo = "ROJO",
  Verde = "VERDE",
  Azul = "AZUL"
}

enum Roles {
  ADMINISTRADOR = 7263283,
  USUARIO = 873636745,
  CLIENTE = 98472386
}

enum Talla {
    XS, S, M, L, XL = "XL"
}

type Talla2 = "XS" | "S" | "M" | "L" | "XL"

interface Camiseta {
    color: Color,
    talla: Talla,
    tela: string,
    precio: number,
    esMangaLarga: boolean,
    estilo: string;
}

const camiseta: Camiseta = {
    tela: "poliester",
    precio: 100000,
    esMangaLarga: false,
    estilo: "chimba",
    color: Color.Azul,
    talla: Talla.XL
}

console.log(Roles.ADMINISTRADOR)