import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserForm } from './component/create-user-form/create-user-form';

@NgModule({
  declarations: [CreateUserForm],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CreateUserForm],
})
export class UserModule {}
