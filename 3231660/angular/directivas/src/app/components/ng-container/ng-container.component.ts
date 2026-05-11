import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.scss',
})
export class NgContainerComponent {
  isAuthenticated = true;

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  users = [
    { name: 'Alejo', age: 23 },
    { name: 'Pepito', age: 33 },
    { name: 'Susana', age: 28 },
    { name: 'Sutano', age: 19 },
    { name: 'Perencejo', age: 56 },
  ];
}
