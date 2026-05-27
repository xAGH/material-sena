import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from './pages/login/login';

@NgModule({
  declarations: [Login],
  imports: [CommonModule, FormsModule],
  exports: [Login],
})
export class AuthModule {}
