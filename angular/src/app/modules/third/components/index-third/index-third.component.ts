import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { IPokemon } from 'src/app/modules/types';
import pokemons from 'src/app/data/pokedex.json';

@Component({
  selector: 'app-index-third',
  templateUrl: './index-third.component.html',
  styleUrls: ['./index-third.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexThirdComponent {

  @Input() selected: IPokemon | null = null;

  pokemons: IPokemon[] = pokemons;

  isFirstSelected: boolean = false;

  isLastSelected: boolean = false;

  @HostListener('document:keydown', ['$event']) handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        this.goPrevious();
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        this.goNext();
        break;
    }
  }

  selectItem(pokemon: IPokemon): void {
    this.selected = pokemon;
    const selectedIndex = this.getPokemonIndex(pokemon);
    this.isFirstSelected = selectedIndex === 0;
    this.isLastSelected = selectedIndex + 1 === this.pokemons.length;
  }

  goPrevious(): void {
    if (this.selected && !this.isFirstSelected) {
      const selectedIndex = this.getPokemonIndex(this.selected);
      this.selectItem(this.pokemons[selectedIndex - 1]);
    }
  }

  goNext(): void {
    if (this.selected && !this.isLastSelected) {
      const selectedIndex = this.getPokemonIndex(this.selected);
      this.selectItem(this.pokemons[selectedIndex + 1]);
    }
  }

  getPokemonIndex(pokemon: IPokemon): number {
    return this.pokemons.findIndex(p => p.id === pokemon.id);
  }

}
