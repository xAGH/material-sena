import { Injectable } from '@angular/core';
import { Producto } from '../types/prouduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private __productos: Producto[] = [
    {
      nombre: 'Teclado Mecánico RGB',
      precio: 250000,
      image: 'https://placehold.co/80',
      descripcion: 'Teclado mecánico con retroiluminación RGB y switches azules.',
      stock: 15,
      category: 'web',
    },
    {
      nombre: 'Mouse Gamer',
      precio: 120000,
      image: 'https://placehold.co/80',
      descripcion: 'Mouse óptico gamer con 6 botones programables y DPI ajustable.',
      stock: 25,
      category: 'escritorio',
    },
    {
      nombre: "Monitor 24'' Full HD",
      precio: 800000,
      image: 'https://placehold.co/80',
      descripcion: 'Monitor LED de 24 pulgadas con resolución 1920x1080.',
      stock: 8,
      category: 'escritorio',
    },
    {
      nombre: 'Auriculares Inalámbricos',
      precio: 180000,
      image: 'https://placehold.co/80',
      descripcion: 'Auriculares Bluetooth con micrófono y cancelación de ruido.',
      stock: 30,
      category: 'web',
    },
    {
      nombre: 'Disco Duro Externo 1TB',
      precio: 300000,
      image: 'https://placehold.co/80',
      descripcion: 'Disco duro portátil USB 3.0 de 1 terabyte.',
      stock: 12,
      category: 'movil',
    },
    {
      nombre: 'Silla Ergonómica',
      precio: 650000,
      image: 'https://placehold.co/80',
      descripcion: 'Silla ergonómica para oficina con soporte lumbar ajustable.',
      stock: 5,
      category: 'web',
    },
    {
      nombre: 'Smartphone 128GB',
      precio: 1500000,
      image: 'https://placehold.co/80',
      descripcion: 'Teléfono inteligente de 128GB con cámara de 48MP.',
      stock: 10,
      category: 'escritorio',
    },
    {
      nombre: 'Cámara Web HD',
      precio: 95000,
      image: 'https://placehold.co/80',
      descripcion: 'Cámara web 720p con micrófono integrado.',
      stock: 20,
      category: 'movil',
    },
    {
      nombre: 'Impresora Multifuncional',
      precio: 450000,
      image: 'https://placehold.co/80',
      descripcion: 'Impresora a color con escáner y conexión WiFi.',
      stock: 7,
      category: 'escritorio',
    },
    {
      nombre: 'Memoria USB 64GB',
      precio: 50000,
      image: 'https://placehold.co/80',
      descripcion: 'Memoria USB 3.1 de 64GB con carcasa metálica.',
      stock: 40,
      category: 'movil',
    },
  ];

  agregar() {
    this.__productos.push({
      nombre: 'Alejo',
      image: 'https://placehold.co/80',
      descripcion: 'Alejo producto',
      precio: 20000,
      stock: 2,
      category: 'movil',
    });
  }

  eliminar(idx: number) {
    this.__productos.splice(idx, 1)
  }

  get productos() {
    return this.__productos
  }

}
