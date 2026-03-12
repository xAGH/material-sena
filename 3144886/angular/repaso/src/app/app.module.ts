import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [AppComponent, ProductFormComponent, ProductListComponent, ProductCardComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
