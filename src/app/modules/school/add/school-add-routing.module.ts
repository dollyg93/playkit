import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolAddComponent } from './school-add.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolAddRoutingModule { }
