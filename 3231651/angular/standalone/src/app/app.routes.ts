import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { CounterComponent } from './features/utils/counter/counter.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'login-normal',
    component: LoginComponent,
  },
  {
    path: 'login-lazy',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(
        (c) => c.LoginComponent,
      ),
  },
];
