import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { ThirdRoutingModule } from './third-routing.module';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { IndexThirdComponent } from './components/index-third/index-third.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    IndexThirdComponent,
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    ThirdRoutingModule,
    MatButtonModule,
  ]
})
export class ThirdModule { }
