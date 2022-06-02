import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnDestroy, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { IPokemon } from 'src/app/modules/types';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent implements OnChanges, AfterViewInit, OnDestroy {

  @ViewChildren('pokemon', { read: ElementRef }) pokemonElements?: QueryList<ElementRef>;

  @Input() selected: IPokemon | null = null;

  @Input() pokemons: IPokemon[] = [];

  // interval: null | number = null;

  ngOnInit(): void {
    this.startProcess();
  }

  ngOnDestroy(): void {
    // if (this.interval) {
    //   window.clearInterval(this.interval);
    // }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selected.currentValue) {
      this.scrollTo(changes.selected.currentValue);
    }
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    if (this.selected) {
      this.scrollTo(this.selected);
    }
  }

  scrollTo(pokemon: IPokemon): void {
    if (this.pokemonElements) {
      const element = this.pokemonElements.get(this.pokemons.findIndex(p => p.id === pokemon.id));
      element?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }

  startProcess(): void {
    // this.interval = window.setInterval(() => {
    //   console.log((new Date()).valueOf());
    // }, 250);
  }

}
