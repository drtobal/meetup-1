import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IPokemon } from 'src/app/modules/types';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {

  @Input() selected: IPokemon | null = null;

  @Input() pokemons: IPokemon[] = [];

  @Output() selectItem: EventEmitter<IPokemon> = new EventEmitter();

  getSprite(item: IPokemon): string {
    return `${item.id.toString().padStart(3, '0')}MS.png`;
  }

}
