import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoutBtnComponent } from './components/logout-btn/logout-btn.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [LoginComponent, LogoutBtnComponent],
  imports: [CommonModule],
  exports: [LogoutBtnComponent, LoginComponent],
})
export class AuthModule {}
