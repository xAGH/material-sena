import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserList } from './components/user-list/user-list';

@NgModule({
  declarations: [UserList],
  imports: [CommonModule],
  exports: [UserList],
})
export class UserModule {}
