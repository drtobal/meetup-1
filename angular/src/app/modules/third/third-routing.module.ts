import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexThirdComponent } from './components/index-third/index-third.component';

const routes: Routes = [
  { path: '', component: IndexThirdComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdRoutingModule { }
