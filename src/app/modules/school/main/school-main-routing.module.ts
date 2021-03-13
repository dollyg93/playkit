import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolMainComponent } from './school-main.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolMainRoutingModule { }