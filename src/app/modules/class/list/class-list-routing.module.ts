import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassListComponent } from './class-list.componet';

const routes: Routes = [
  {
    path: 'class-list',
    component: ClassListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassListRoutingModule { }
