import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { GetPokemonsResponse } from '../models/http/responses/get-pokemons-response';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http
      .get<GetPokemonsResponse>('https://pokeapi.co/api/v2/pokemon/')
      .pipe(
        map((res) => {
          const results = res.results;
          return results.map((result) => ({
            id: 1,
            name: result.name,
            sprite: 'https://placehold.co/200',
            types: ['Fairy'],
          }));
        })
      );
  }
}
