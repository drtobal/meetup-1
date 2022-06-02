import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexSecondComponent } from './components/index-second/index-second.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { SecondRoutingModule } from './second-routing.module';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';



@NgModule({
  declarations: [
    IndexSecondComponent,
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    SecondRoutingModule,
  ]
})
export class SecondModule { }
