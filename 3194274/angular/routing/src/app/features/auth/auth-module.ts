import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing-module';
import { Login } from './pages/login/login';

@NgModule({
  declarations: [Login],
  imports: [CommonModule, AuthRoutingModule],
  exports: [],
})
export class AuthModule {}
