import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './features/auth/auth.module';
import { ProductModule } from './features/product/product.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, SharedModule, AuthModule, ProductModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
