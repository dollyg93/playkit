import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionMainComponent } from './region-main.component';

const routes: Routes = [
  {
    path: '',
    component: RegionMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionMainRoutingModule { }
