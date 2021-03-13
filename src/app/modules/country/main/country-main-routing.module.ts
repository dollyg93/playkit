import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryMainComponent } from './country-main.component';

const routes: Routes = [
  {
    path: '',
    component: CountryMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryMainRoutingModule { }
