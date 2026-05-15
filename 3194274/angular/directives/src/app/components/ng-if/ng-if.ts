import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  standalone: false,
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.scss',
})
export class NgIf {
  isAuthenticated = false;

  toggle() {
    this.isAuthenticated = !this.isAuthenticated;
  }
}
