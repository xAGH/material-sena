import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserList } from './page/user-list/user-list';
import { UserRoutingModule } from './user-routing-module';

@NgModule({
  declarations: [UserList],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
