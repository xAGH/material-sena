import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { authInterceptor } from './interceptors/auth-interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [provideHttpClient(withInterceptors([authInterceptor]))],
})
export class CoreModule {}
