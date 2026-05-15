import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
  standalone: false,
})
export class Counter {
  counter = 0;

  increment(num: number) {
    console.log(num);

    this.counter++;
  }

  decrement(num: number) {
    console.log(num);
    this.counter--;
  }

  clear() {
    this.counter = 0;
  }
}
