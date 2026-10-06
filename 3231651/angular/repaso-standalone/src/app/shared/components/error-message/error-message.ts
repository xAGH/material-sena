import { Component, input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: ` <p class="error" role="alert">{{ message() }}</p> `,
  styles: `
    .error {
      padding: 0.75rem 1rem;
      border-radius: 6px;
      background: #fee2e2;
      color: #991b1b;
    }
  `,
})
export class ErrorMessage {
  readonly message = input.required<string>();
}
