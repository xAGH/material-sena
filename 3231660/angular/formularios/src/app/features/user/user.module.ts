import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [RegisterFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [RegisterFormComponent],
})
export class UserModule {}
