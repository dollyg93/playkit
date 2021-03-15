import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeginTrainingComponent } from './begin-training.component';

const routes: Routes = [
  {
    path: '',
    component: BeginTrainingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeginTrainingRouting{ }

