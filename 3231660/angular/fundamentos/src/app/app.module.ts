import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';

// Función decoradora
@NgModule({
  // Declaración de componentes de este módulo
  declarations: [AppComponent, ButtonComponent],
  // Importación de módulos que queremos utilizar
  imports: [BrowserModule],
  // Proveedores
  providers: [],
  // Es una propiedad que SOLO VA EN EL MÓDULO PRINCIPAL.
  // Indica cual es el componente incicial.
  bootstrap: [AppComponent],
})
export class AppModule {}
