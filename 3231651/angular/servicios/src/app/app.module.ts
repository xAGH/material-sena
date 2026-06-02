import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './features/auth/auth.module';
import { UserModule } from './features/user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
