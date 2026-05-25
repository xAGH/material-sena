import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './pages/user-list/user-list.component';

@NgModule({
  declarations: [UserListComponent, UserCardComponent],
  imports: [CommonModule],
  exports: [UserListComponent],
})
export class UserModule {}
