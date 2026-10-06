import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `<p class="loading">Cargando...</p>`,
  styles: `
    .loading {
      text-align: center;
      color: #6b7280;
    }
  `,
})
export class Loading {}
