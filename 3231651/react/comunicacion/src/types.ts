export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  stock: number;
}

export type NuevoProducto = Omit<Producto, "id">; // Omite la unión de propiedades indicada
// export type ProductoOpcional = Partial<Producto> // Todas las propiedades opcionales;
// export type SoloAlgunosDatosProducto = Pick<Producto, "id" | "nombre">; // {id, nombre}

// Permite definir el tipo de un objeto en cuanto a sus llaves y valores
// type Municipios = Record<string, number>;

// const municipio: Municipios = {
//   quindío: 630001,
//   caldas: "ad",
// };

// console.log(municipio);
// type ProductoSoloLectura = Readonly<Producto>;
// const p: ProductoSoloLectura = {
//   id: "1",
//   nombre: "papel",
//   precio: 1000,
//   stock: 10,
// };
