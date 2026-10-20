export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

export const menu: Producto[] = [
  { id: 1, nombre: "Tinto", precio: 2500 },
  { id: 2, nombre: "Capuchino", precio: 7000 },
  { id: 3, nombre: "Café filtrado en V60", precio: 9000 },
  { id: 4, nombre: "Pandebono", precio: 3500 },
  { id: 5, nombre: "Torta de banano", precio: 6000 },
];
