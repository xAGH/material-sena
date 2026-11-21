import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-condition',
  imports: [],
  templateUrl: './condition.component.html',
  styleUrl: './condition.component.scss',
})
export class ConditionComponent {
  loggedIn = signal(false);

  login() {
    this.loggedIn.set(true);
  }

  logout() {
    this.loggedIn.set(false);
  }
}
