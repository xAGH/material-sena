import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404 } from './shared/pages/error404/error404';

const routes: Routes = [
  {
    path: 'auth',
    // Cargar componente directamente
    // component: Login,

    // Cargar módulo mediante Lazy Loading
    loadChildren: () => import('./features/auth/auth-module').then((m) => m.AuthModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./features/user/user-module').then((m) => m.UserModule),
  },
  {
    path: 'product',
    loadChildren: () => import('./features/products/products-module').then((m) => m.ProductsModule),
  },
  {
    path: '**',
    component: Error404,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
