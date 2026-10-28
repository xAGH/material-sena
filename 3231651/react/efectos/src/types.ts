interface Cargando {
  estado: "cargando";
}

interface Exito<T> {
  estado: "exito";
  datos: T;
}

interface Error {
  estado: "error";
  mensaje: string;
}

export type EstadoCarga<T> = Cargando | Exito<T> | Error;

export interface PostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}
