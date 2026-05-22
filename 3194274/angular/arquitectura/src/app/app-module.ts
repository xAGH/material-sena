import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { AuthModule } from './features/auth/auth-module';
import { UserModule } from './features/user/user-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AuthModule, UserModule],
  providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()],
  bootstrap: [App],
})
export class AppModule {}
