import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IPokemon } from 'src/app/modules/types';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailComponent {

  @Input() pokemon!: IPokemon;

  @Input() isFirstSelected: boolean = false;

  @Input() isLastSelected: boolean = false;

  @Output() previous = new EventEmitter<void>();

  @Output() next = new EventEmitter<void>();

  getImage(item: IPokemon): string {
    return `${item.id.toString().padStart(3, '0')}.png`;
  }

}
