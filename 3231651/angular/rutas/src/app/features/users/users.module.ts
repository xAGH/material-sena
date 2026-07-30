import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    UserListComponent,
    DashboardComponent
  ],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
