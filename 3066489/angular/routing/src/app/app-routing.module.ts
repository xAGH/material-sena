import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/pokedex/pages/home/home.component';
import { PokemonListComponent } from './features/pokedex/pages/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './features/pokedex/pages/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pokemon-list',
    component: PokemonListComponent,
  },
  {
    path: 'pokemon-detail/:id',
    component: PokemonDetailComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
