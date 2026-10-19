type Metodo = "tarjeta" | "efectivo" | "transferencia";

interface Tarjeta {
  numeroTarjeta: number;
  cvv: number;
  tipo: "tarjeta";
}

interface Transferencia {
  banco: string;
  numeroCuenta: number;
  tipo: "transferencia";
}

type Efectivo = null;

type Pago = Tarjeta | Transferencia | Efectivo;

function validarPago(pago: Pago) {
  if (pago === null) {
    return true;
  }

  if (pago.tipo === "tarjeta") {
    return pago.numeroTarjeta !== undefined && pago.cvv !== undefined;
  } else {
    return pago.banco !== undefined && pago.numeroCuenta !== undefined;
  }
}
