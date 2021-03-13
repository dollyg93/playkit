import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingTaskViewComponent } from './training-task.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingTaskViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingTaskViewRoutingModule { }

