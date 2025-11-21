import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    logued = false;
    nombre = 'Alejo';
    veces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    products: Product[] = [
        {
            name: 'Mouse',
            price: 20000,
            category: 'Periféricos',
            quantity: 10,
            brand: 'Supermouse',
            model: '2000',
            cardColor: "rgb(245, 73, 27)"
        },
        {
            name: 'Teclado mecánico',
            price: 150000,
            category: 'Periféricos',
            quantity: 15,
            brand: 'KeyMaster',
            model: 'MK-Pro',
        },
        {
            name: 'Monitor 24 pulgadas',
            price: 550000,
            category: 'Pantallas',
            quantity: 8,
            brand: 'ViewMax',
            model: 'VM24FHD',
        },
        {
            name: 'USB 32GB',
            price: 30000,
            category: 'Almacenamiento',
            quantity: 40,
            brand: 'DataFlash',
            model: 'DF32',
        },
        {
            name: 'Disco duro 1TB',
            price: 180000,
            category: 'Almacenamiento',
            quantity: 12,
            brand: 'StoragePro',
            model: 'SP1000',
            cardColor: "rgba(170, 170, 170, 1)"
        },
        {
            name: 'Laptop i5',
            price: 2500000,
            category: 'Computadores',
            quantity: 5,
            brand: 'TechBook',
            model: 'TB15',
        },
        {
            name: 'Parlantes Bluetooth',
            price: 85000,
            category: 'Audio',
            quantity: 20,
            brand: 'SoundBeat',
            model: 'SB200',
        },
        {
            name: 'Audífonos inalámbricos',
            price: 120000,
            category: 'Audio',
            quantity: 25,
            brand: 'AudioFlex',
            model: 'AF-X2',
            cardColor: "rgba(203, 232, 89, 1)"
        },
        {
            name: 'Impresora multifuncional',
            price: 450000,
            category: 'Impresión',
            quantity: 6,
            brand: 'PrintPro',
            model: 'PP-MF100',
            cardColor: "rgba(87, 226, 253, 1)"
        },
        {
            name: 'Webcam HD',
            price: 90000,
            category: 'Periféricos',
            quantity: 18,
            brand: 'CamVision',
            model: 'CV720',
        },
        {
            name: 'Router WiFi',
            price: 130000,
            category: 'Redes',
            quantity: 14,
            brand: 'NetSpeed',
            model: 'NS300',
        },
        {
            name: 'Tarjeta de video GTX 1650',
            price: 1200000,
            category: 'Componentes',
            quantity: 4,
            brand: 'GigaForce',
            model: 'GF1650',
        },
        {
            name: 'Memoria RAM 8GB',
            price: 150000,
            category: 'Componentes',
            quantity: 20,
            brand: 'FastRAM',
            model: 'FR8',
        },
        {
            name: 'Smartphone Android',
            price: 900000,
            category: 'Móviles',
            quantity: 10,
            brand: 'MegaPhone',
            model: 'MP10',
        },
        {
            name: 'Tableta 10 pulgadas',
            price: 700000,
            category: 'Tablets',
            quantity: 7,
            brand: 'TabTech',
            model: 'TT10',
        },
        {
            name: 'Cámara fotográfica',
            price: 1800000,
            category: 'Fotografía',
            quantity: 5,
            brand: 'PhotoPro',
            model: 'PPX100',
        },
        {
            name: 'Teclado inalámbrico',
            price: 60000,
            category: 'Periféricos',
            quantity: 22,
            brand: 'KeyLite',
            model: 'KL-W1',
        },
        {
            name: 'Auriculares gamer',
            price: 160000,
            category: 'Audio',
            quantity: 16,
            brand: 'GamerSound',
            model: 'GS500',
        },
        {
            name: 'SSD 512GB',
            price: 320000,
            category: 'Almacenamiento',
            quantity: 13,
            brand: 'UltraDisk',
            model: 'UD512',
        },
        {
            name: 'Smartwatch',
            price: 250000,
            category: 'Wearables',
            quantity: 9,
            brand: 'TimeTech',
            model: 'TT-W2',
        },
        {
            name: 'Caja de sonido portátil',
            price: 110000,
            category: 'Audio',
            quantity: 17,
            brand: 'BeatBox',
            model: 'BBP3',
        },
    ];
}
