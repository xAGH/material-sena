import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { InputComponent } from './components/input/input.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [LoginComponent, InputComponent, RegisterComponent],
  imports: [AuthRoutingModule, CommonModule, ReactiveFormsModule],
  exports: [LoginComponent],
})
export class AuthModule {}
