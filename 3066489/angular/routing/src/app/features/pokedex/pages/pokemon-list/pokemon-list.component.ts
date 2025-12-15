import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((data) => {
      this.pokemons = data;
      this.filteredPokemons = this.pokemons;
    });
  }

  onSearch(search: string) {
    const value = search.toLowerCase().trim();

    this.filteredPokemons = this.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value)
    );
  }
}
