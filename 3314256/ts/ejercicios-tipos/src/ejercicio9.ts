type UnidadMedida = "cm" | "m" | "km";

function convertir(desde: UnidadMedida, hasta: UnidadMedida, valor: number) {
  if (desde === "cm") {
    if (hasta === "cm") {
      return valor;
    } else if (hasta === "m") {
      return valor / 100;
    } else {
      return valor / 1000;
    }
  }
}
