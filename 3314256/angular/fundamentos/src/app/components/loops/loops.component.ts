import { Component, computed, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Person {
  id: number;
  name: string;
  email: string;
  age: number;
}

@Component({
  selector: 'app-loops',
  imports: [FormsModule],
  templateUrl: './loops.component.html',
  styleUrl: './loops.component.scss',
})
export class LoopsComponent {
  search = signal('');

  persons: WritableSignal<Person[]> = signal([
    { id: 1, name: 'Laura Gómez', email: 'laura.gomez@example.com', age: 28 },
    {
      id: 2,
      name: 'Andrés Ramírez',
      email: 'andres.ramirez@example.com',
      age: 34,
    },
    {
      id: 3,
      name: 'Valentina Torres',
      email: 'valentina.torres@example.com',
      age: 22,
    },
    {
      id: 4,
      name: 'Santiago López',
      email: 'santiago.lopez@example.com',
      age: 41,
    },
    {
      id: 5,
      name: 'Camila Herrera',
      email: 'camila.herrera@example.com',
      age: 30,
    },
    {
      id: 6,
      name: 'Julián Castro',
      email: 'julian.castro@example.com',
      age: 26,
    },
    {
      id: 7,
      name: 'Daniela Martínez',
      email: 'daniela.martinez@example.com',
      age: 37,
    },
    {
      id: 8,
      name: 'Felipe Ospina',
      email: 'felipe.ospina@example.com',
      age: 19,
    },
    {
      id: 9,
      name: 'Mariana Rojas',
      email: 'mariana.rojas@example.com',
      age: 45,
    },
    {
      id: 10,
      name: 'Sebastián Vargas',
      email: 'sebastian.vargas@example.com',
      age: 32,
    },
  ]);

  filtered = computed(() => {
    const value = this.search().trim().toLocaleLowerCase();

    if (value === '') return this.persons();

    return this.persons().filter((person) =>
      person.name.toLocaleLowerCase().includes(value),
    );
  });
}
