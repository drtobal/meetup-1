import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstRoutingModule } from './first-routing.module';
import { TitleComponent } from './components/title/title.component';
import { IndexFirstComponent } from './components/index-first/index-first.component';



@NgModule({
  declarations: [
    IndexFirstComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    FirstRoutingModule,
  ]
})
export class FirstModule { }
