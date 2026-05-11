import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.scss',
})
export class NgForComponent {
  users = [
    { name: 'Alejo', age: 23 },
    { name: 'Pepito', age: 33 },
    { name: 'Susana', age: 28 },
    { name: 'Sutano', age: 19 },
    { name: 'Perencejo', age: 56 },
  ];
}
