import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  counter = signal(0);

  decrement() {
    this.counter.update((value) => value - 1);
  }

  increment() {
    this.counter.update((value) => value + 1);
  }

  reset() {
    this.counter.set(0);
  }

  get disableButton() {
    if (this.counter() === 0) {
      return true;
    }
    return false;
  }

  // set disableButton(n: number) {
  //   if (this.counter === 0) {
  //     return true;
  //   }
  //   return false;
  // }
}
