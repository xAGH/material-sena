import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductModule } from './features/product/product.module';
import { UserModule } from './features/user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UserModule, ProductModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
