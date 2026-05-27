import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserCard } from './components/user-card/user-card';
import { UserList } from './pages/user-list/user-list';

@NgModule({
  declarations: [UserCard, UserList],
  imports: [CommonModule],
  exports: [UserList],
})
export class UserModule {}
