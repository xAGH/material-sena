import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogoutBtnComponent } from './components/logout-btn/logout-btn.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [LoginComponent, LogoutBtnComponent],
  imports: [CommonModule, FormsModule],
  exports: [LogoutBtnComponent, LoginComponent],
})
export class AuthModule {}
