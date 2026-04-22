import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: () => {},
      complete: () => {},
    });
  }
}
