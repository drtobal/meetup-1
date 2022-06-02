import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexSecondComponent } from './components/index-second/index-second.component';

const routes: Routes = [
  { path: '', component: IndexSecondComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }
