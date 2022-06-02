import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { FourthRoutingModule } from './fourth-routing.module';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { IndexFourthComponent } from './components/index-fourth/index-fourth.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    IndexFourthComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonSearchComponent,
    PokemonListItemComponent
  ],
  imports: [
    CommonModule,
    FourthRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    ScrollingModule,
  ]
})
export class FourthModule { }
