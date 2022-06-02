import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPokemon } from 'src/app/modules/types';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailComponent {

  @Input() pokemon!: IPokemon;

  @Input() previous: IPokemon | null = null;

  @Input() next: IPokemon | null = null;

  constructor(
    private pokemonService: PokemonService,
  ) { }

  getImage(item: IPokemon): string {
    return `${item.id.toString().padStart(3, '0')}.png`;
  }

  getRoute(pokemon: IPokemon): string {
    return this.pokemonService.getRoute(pokemon);
  }

}
