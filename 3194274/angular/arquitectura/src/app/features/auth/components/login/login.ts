import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  userInput = '';
  passwordInput = '';

  @Output() login = new EventEmitter<{ user: string; password: string }>();

  onClick() {
    this.login.emit({ user: this.userInput, password: this.passwordInput });
  }
}
