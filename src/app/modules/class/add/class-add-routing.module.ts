import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassAddComponent } from './class-add.component';

const routes: Routes = [
  {
    path: '',
    component: ClassAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassAddRoutingModule { }
