import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IPokemon } from 'src/app/modules/types';
import pokemons from 'src/app/data/pokedex.json';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {

  @Input() selected: IPokemon | null = null;

  @Output() selectItem: EventEmitter<IPokemon> = new EventEmitter();

  pokemons: IPokemon[] = pokemons;

  getSprite(item: IPokemon): string {
    return `${item.id.toString().padStart(3, '0')}MS.png`;
  }

}
