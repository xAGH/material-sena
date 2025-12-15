import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pokedex/pages/home/home.component';
import { PokemonListComponent } from './pokedex/pages/pokemon-list/pokemon-list.component';
import { SearchInputComponent } from './pokedex/components/pokemon-list/search-input/search-input.component';
import { GoBackButtonComponent } from './pokedex/components/pokemon-list/go-back-button/go-back-button.component';
import { PokemonCardComponent } from './pokedex/components/pokemon-list/pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './pokedex/pages/pokemon-detail/pokemon-detail.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PokemonTypeBadgeComponent } from './pokedex/components/pokemon-list/pokemon-type-badge/pokemon-type-badge.component';

@NgModule({
  declarations: [
    HomeComponent,
    PokemonListComponent,
    PokemonCardComponent,
    SearchInputComponent,
    GoBackButtonComponent,
    PokemonDetailComponent,
    PokemonTypeBadgeComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [],
})
export class FeaturesModule {}
