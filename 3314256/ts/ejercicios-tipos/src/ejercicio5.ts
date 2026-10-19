type TipoCambio = "nombre" | "correo" | "contraseña";

interface Cambio {
  tipo: TipoCambio;
  newValue: string;
}

function cantidadCambios(cambios: Cambio[]) {
  return cambios.reduce(
    (cantidadVeces, cambio) => {
      switch (cambio.tipo) {
        case "contraseña":
          cantidadVeces.contrasena += 1;
          break;
        case "correo":
          cantidadVeces.correo += 1;
          break;
        case "nombre":
          cantidadVeces.nombre += 1;
          break;
      }
      return cantidadVeces;
    },
    { nombre: 0, correo: 0, contrasena: 0 },
  );
}
