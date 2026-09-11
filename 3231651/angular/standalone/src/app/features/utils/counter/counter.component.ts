import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  http = inject(HttpClient);
  counter = signal(0);
  doubled = computed(() => this.counter() * 2);
  fruits: Array<string> = [];

  log = computed(() => console.log(this.counter()));

  up() {
    this.counter.update((v) => v + 1);
  }

  add() {
    this.fruits.push('Banano');
  }

  down() {
    this.counter.set(this.counter() - 1);
  }
}
