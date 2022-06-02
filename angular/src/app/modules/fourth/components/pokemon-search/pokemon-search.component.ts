import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { TRANSITION_ENTER, TRANSITION_EXIT_PERMANENT } from 'src/app/data/transitions';
import { IPokemon } from 'src/app/modules/types';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('OverlayInOutAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate(TRANSITION_ENTER, style({ opacity: .3 }))]),
      transition(':leave', [style({ opacity: .3 }), animate(TRANSITION_EXIT_PERMANENT, style({ opacity: 0 }))]),
    ]),
    trigger('InputInOutAnimation', [
      transition(':enter', [style({ width: 0 }), animate(TRANSITION_ENTER, style({ width: '250px' }))]),
      transition(':leave', [style({ width: '250px' }), animate(TRANSITION_EXIT_PERMANENT, style({ width: 0 }))]),
    ]),
  ],
})
export class PokemonSearchComponent {

  @ViewChild('input') inputElement?: ElementRef;

  @Input() pokemons: IPokemon[] = [];

  form = new FormControl();

  isSearchVisible: boolean = false;

  constructor(
    private pokemonService: PokemonService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
  ) { }

  @HostListener('document:keydown.escape') onKeydownHandler(): void {
    this.isSearchVisible = false;
  }

  filterPokemons(text: string): IPokemon[] {
    if (text) {
      return this.pokemons.filter(p => p.id.toString() === text ||
        p.name.english.search(new RegExp(this.form.value, 'gi')) > -1).slice(0, 10);
    }
    return [];
  }

  showSearch(): void {
    this.form.setValue('');
    this.isSearchVisible = true;
    this.changeDetectorRef.detectChanges();
    if (this.inputElement) {
      (this.inputElement.nativeElement as HTMLInputElement).focus();
    }
  }

  optionSelected(event: MatAutocompleteSelectedEvent): void {
    this.isSearchVisible = false;
    this.router.navigate([this.pokemonService.getRoute(event.option.value)]);
  }

}
