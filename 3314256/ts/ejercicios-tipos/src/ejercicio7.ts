type Categoria = "alimentos" | "tecnología" | "papelería";

interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  categoría: Categoria;
}

function calcularBajoStock(producto: Producto) {
  switch (producto.categoría) {
    case "alimentos":
      return producto.cantidad <= 20;
    case "papelería":
      return producto.cantidad <= 50;
    case "tecnología":
      return producto.cantidad <= 5;
  }
}
