import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutEditComponent } from './about-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AboutEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutEditRoutingModule { }
