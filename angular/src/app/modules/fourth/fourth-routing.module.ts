import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexFourthComponent } from './components/index-fourth/index-fourth.component';

const routes: Routes = [
  { path: '', component: IndexFourthComponent },
  { path: ':name', component: IndexFourthComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourthRoutingModule { }
