import { Injectable } from '@angular/core';
import { IPokemon } from 'src/app/modules/types';
import { kebabCase } from "lodash";
import pokemons from 'src/app/data/pokedex.json';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getPokemons(): IPokemon[] {
    return pokemons;
  }

  getRoute(pokemon: IPokemon): string {
    return `/fourth/${this.getSlug(pokemon)}`;
  }

  getSlug(pokemon: IPokemon): string {
    return kebabCase(pokemon.name.english);
  }

}
