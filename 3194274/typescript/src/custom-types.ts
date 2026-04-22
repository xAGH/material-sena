// || != |
// && != &

// | -> Unión
// & -> Concatenación

type Alejo = string | number | boolean | null;

type Giraldo = number;

const stringOrNum: Alejo = null;
const giraldo: Giraldo = 1;

type Address = {
  street: string;
  city: string;
};

type ZipCode = {
  zone: string;
  code: number;
};

type Persona = {
  name: string;
  lastname: string;
  address: Address & ZipCode;
};

const persona: Persona = {
  name: "Alejo",
  lastname: "Giraldo",
  address: {
    city: "Armenia",
    code: 630004,
    street: "Calle 8",
    zone: "Urbana",
  },
};

const alejo: "alejo" | "juan" = "alejo";

type Rol = "ADMIN" | "USER" | "VISITANT";

const rol: Rol = "ADMIN";

const alejo2: 1 = 1;
