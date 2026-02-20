import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  auth = false;
  users: User[] = [];
  day = 'Martes';

  name = '';

  ngOnInit(): void {
    console.log('Se montó el componente');
  }

  authenticate() {
    this.auth = !this.auth;
  }

  onInput() {
    console.log(this.name);
  }

  changeName() {
    this.name = 'Alejo';
  }

  loadUsers() {
    this.users = [
      { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com' },
      { id: 2, name: 'María Gómez', email: 'maria.gomez@example.com' },
      {
        id: 3,
        name: 'Carlos Rodríguez',
        email: 'carlos.rodriguez@example.com',
      },
      { id: 4, name: 'Laura Martínez', email: 'laura.martinez@example.com' },
      { id: 5, name: 'Andrés López', email: 'andres.lopez@example.com' },
      { id: 6, name: 'Sofía Ramírez', email: 'sofia.ramirez@example.com' },
      { id: 7, name: 'Diego Torres', email: 'diego.torres@example.com' },
      { id: 8, name: 'Valentina Cruz', email: 'valentina.cruz@example.com' },
      { id: 9, name: 'Miguel Herrera', email: 'miguel.herrera@example.com' },
      {
        id: 10,
        name: 'Camila Fernández',
        email: 'camila.fernandez@example.com',
      },
      {
        id: 11,
        name: 'Camilo Chavez',
        email: 'camila.fernandez@example.com',
      },
    ];

    console.log(this.users);
  }
}
