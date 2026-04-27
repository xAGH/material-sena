import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  counter = 0;

  up() {
    this.counter++;
  }

  down() {
    this.counter--;
  }

  clear() {
    this.counter = 0;
  }
}
