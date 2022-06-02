import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPokemon } from 'src/app/modules/types';

@Component({
  selector: 'app-index-second',
  templateUrl: './index-second.component.html',
  styleUrls: ['./index-second.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexSecondComponent {

  @Input() selected: IPokemon | null = null;

  selectItem(pokemon: IPokemon): void {
    this.selected = pokemon;
  }

}
