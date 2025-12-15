import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
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
        switchMap((res) => {
          const urls = res.results.map((result) => this.http.get(result.url));
          return forkJoin(urls);
        }),
        map((pokemons: any[]) => {
          return pokemons.map((pokemon) => {
            console.log('POKEKEKEKE', pokemon);
            console.log(pokemon.types.map((type: any) => type.type.name));
            return {
              id: pokemon.id,
              name: pokemon.name,
              sprite: pokemon.sprites ? pokemon.sprites.front_default : '',
              types: pokemon.types.map((type: any) => type.type.name),
            } as Pokemon;
          });
        })
      );
  }
}
