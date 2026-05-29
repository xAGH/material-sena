import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { LogoutBtnComponent } from './components/logout-btn/logout-btn.component';



@NgModule({
  declarations: [
    LoginComponent,
    LogoutBtnComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
