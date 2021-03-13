import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionAddComponent } from './region-add.component';

const routes: Routes = [
  {
    path: '',
    component: RegionAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionAddRoutingModule { }
