import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPokemon } from 'src/app/modules/types';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListItemComponent {

  @Input() pokemon!: IPokemon;

  @Input() isSelected: boolean = false;

  constructor(
    private pokemonService: PokemonService,
  ) { }

  getSprite(item: IPokemon): string {
    return `${item.id.toString().padStart(3, '0')}MS.png`;
  }

  getRoute(pokemon: IPokemon): string {
    return this.pokemonService.getRoute(pokemon);
  }

}
