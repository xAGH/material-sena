/*
4. Validación de formularios dinámicos
Crea un tipo CampoFormulario con las propiedades: nombre, tipo ("texto", "numero",
"email") y valor (que puede ser string o number).
Desarrolla una función que valide una lista de campos y devuelva los nombres de
los campos inválidos según su tipo.
*/
type TipoCampoFormulario = "texto" | "numero" | "email";

interface CampoFormulario {
  nombre: string;
  tipo: TipoCampoFormulario;
  valor: string | number;
}

function validarCampos(campos: CampoFormulario[]) {
  return campos.reduce(
    (invalidos, campoForm) => {
      switch (campoForm.tipo) {
        case "email":
          if (
            typeof campoForm.valor === "string" &&
            campoForm.valor.includes("@")
          ) {
            break;
          }
          invalidos.email.push(campoForm.nombre);
          break;
        case "numero":
          if (typeof campoForm.valor === "number" && campoForm.valor > 0) {
            break;
          }
          invalidos.numero.push(campoForm.nombre);
          break;
        case "texto":
          if (
            typeof campoForm.valor === "string" &&
            campoForm.valor.length > 0
          ) {
            break;
          }
          invalidos.texto.push(campoForm.nombre);
          break;
      }
      return invalidos;
    },
    {
      texto: new Array<string>(),
      numero: new Array<string>(),
      email: new Array<string>(),
    },
  );
}

const camposPrueba: CampoFormulario[] = [
  { nombre: "nombreUsuario", tipo: "texto", valor: "Alejo" },
  { nombre: "apellido", tipo: "texto", valor: "" },
  { nombre: "edad", tipo: "numero", valor: 25 },
  { nombre: "cantidad", tipo: "numero", valor: -3 },
  { nombre: "telefono", tipo: "numero", valor: "3001234567" },
  { nombre: "correo", tipo: "email", valor: "alejo@correo.com" },
  { nombre: "correoAlterno", tipo: "email", valor: "correo-sin-arroba" },
  { nombre: "correoNumerico", tipo: "email", valor: 12345 },
];

console.log(validarCampos(camposPrueba));
