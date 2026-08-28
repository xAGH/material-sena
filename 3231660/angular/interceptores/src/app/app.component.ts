import { Component, inject, OnInit } from '@angular/core';
import { PokeapiService } from './core/services/pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private pokeApiService = inject(PokeapiService);

  ngOnInit(): void {
    this.pokeApiService.getPokemons().subscribe({
      next: (datos) => console.log(datos),
    });
  }
}
