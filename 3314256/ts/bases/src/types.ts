type StringOrNumber = string | number;
type Uno = 1 | 2 | "Hola" | true;

const name: StringOrNumber = "";
const literal: Uno = "Hola";

type Rol = "ADMIN" | "USER";

enum Rol2 {
  ADMIN,
  USER,
  CLIENT,
}

const rol: Rol = "ADMIN";
const rol2: Rol2 = Rol2.ADMIN;
