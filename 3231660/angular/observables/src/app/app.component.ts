import { Component } from '@angular/core';
import { User } from './features/user/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  USERS: User[] = [
    {
      id: 1,
      name: 'Juan Pérez',
      username: 'juanp',
      email: 'juan.perez@example.com',
      phone: '3001234567',
      website: 'juanp.dev',
      address: {
        street: 'Calle 10',
        suite: 'Apto 101',
        city: 'Cali',
        zipcode: '760001',
        geo: {
          lat: '3.4516',
          lng: '-76.5320',
        },
      },
      company: {
        name: 'Tech Solutions',
        catchPhrase: 'Innovando el futuro',
        bs: 'software development',
      },
    },
    {
      id: 2,
      name: 'María Gómez',
      username: 'mariag',
      email: 'maria.gomez@example.com',
      phone: '3109876543',
      website: 'mariagomez.co',
      address: {
        street: 'Carrera 45',
        suite: 'Oficina 205',
        city: 'Bogotá',
        zipcode: '110111',
        geo: {
          lat: '4.7110',
          lng: '-74.0721',
        },
      },
      company: {
        name: 'Digital Labs',
        catchPhrase: 'Transformación digital para todos',
        bs: 'consulting services',
      },
    },
    {
      id: 3,
      name: 'Carlos Rodríguez',
      username: 'crodriguez',
      email: 'carlos.r@example.com',
      phone: '3154567890',
      website: 'carlosdev.com',
      address: {
        street: 'Av. Principal',
        suite: 'Casa 15',
        city: 'Medellín',
        zipcode: '050001',
        geo: {
          lat: '6.2442',
          lng: '-75.5812',
        },
      },
      company: {
        name: 'Cloud Systems',
        catchPhrase: 'Escalando negocios',
        bs: 'cloud infrastructure',
      },
    },
    {
      id: 4,
      name: 'Laura Martínez',
      username: 'lmartinez',
      email: 'laura.m@example.com',
      phone: '3206543210',
      website: 'lauram.dev',
      address: {
        street: 'Calle 80',
        suite: 'Apto 502',
        city: 'Barranquilla',
        zipcode: '080001',
        geo: {
          lat: '10.9685',
          lng: '-74.7813',
        },
      },
      company: {
        name: 'Creative Studio',
        catchPhrase: 'Diseñando experiencias',
        bs: 'ux ui design',
      },
    },
    {
      id: 5,
      name: 'Andrés Herrera',
      username: 'aherrera',
      email: 'andres.h@example.com',
      phone: '3012223344',
      website: 'andresherrera.io',
      address: {
        street: 'Calle 25',
        suite: 'Local 3',
        city: 'Bucaramanga',
        zipcode: '680001',
        geo: {
          lat: '7.1193',
          lng: '-73.1227',
        },
      },
      company: {
        name: 'Data Analytics Pro',
        catchPhrase: 'Datos que impulsan decisiones',
        bs: 'business intelligence',
      },
    },
  ];
}
