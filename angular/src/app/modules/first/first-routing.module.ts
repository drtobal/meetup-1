import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexFirstComponent } from './components/index-first/index-first.component';

const routes: Routes = [
  { path: '', component: IndexFirstComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
