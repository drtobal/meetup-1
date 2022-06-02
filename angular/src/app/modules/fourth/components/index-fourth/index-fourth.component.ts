import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPokemon } from 'src/app/modules/types';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { ScreenService } from '../../services/screen/screen.service';

@Component({
  selector: 'app-index-fourth',
  templateUrl: './index-fourth.component.html',
  styleUrls: ['./index-fourth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexFourthComponent implements OnInit, OnDestroy {

  selected: IPokemon | null = null;

  pokemons: IPokemon[] = [];

  previous: IPokemon | null = null;

  next: IPokemon | null = null;

  routerSub: Subscription | null = null;

  mediaQuery: MediaQueryList | null = null;

  isMd: boolean = false;

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
    private screenService: ScreenService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
    this.routerSub = this.activatedRoute.params.subscribe(this.activatedRouteChange.bind(this));

    // this.mediaQuery = this.screenService.getMatchMedia('md');
    // this.mediaQuery.addEventListener('change', this.onChangeMdSize.bind(this));
    // this.isMd = this.screenService.screenIs('md');
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    this.mediaQuery?.removeEventListener('change', this.onChangeMdSize);
  }

  @HostListener('document:keydown', ['$event']) handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        this.goPrevious();
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        this.goNext();
        break;
    }
  }

  activatedRouteChange(params: Params): void {
    if (params.name) {
      const pokemon = this.pokemons.find(p => params.name === this.pokemonService.getSlug(p));
      if (pokemon) {
        this.selectItem(pokemon);
      }
    }
  }

  selectItem(pokemon: IPokemon): void {
    this.selected = pokemon;
    const selectedIndex = this.getPokemonIndex(pokemon);
    this.previous = selectedIndex > 0 ? this.pokemons[selectedIndex - 1] : null;
    this.next = selectedIndex < this.pokemons.length ? this.pokemons[selectedIndex + 1] : null;
  }

  goPrevious(): void {
    if (this.previous) {
      this.router.navigate([this.pokemonService.getRoute(this.previous)]);
    }
  }

  goNext(): void {
    if (this.next) {
      this.router.navigate([this.pokemonService.getRoute(this.next)]);
    }
  }

  getPokemonIndex(pokemon: IPokemon): number {
    return this.pokemons.findIndex(p => p.id === pokemon.id);
  }

  onChangeMdSize(event: MediaQueryListEvent): void {
    // this.isMd = event.matches;
    // this.changeDetectorRef.markForCheck();
  }

}
