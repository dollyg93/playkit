import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditMainTrainingComponent } from './edit-main-training.component';

const routes: Routes = [
  {
    path: '',
    component: EditMainTrainingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditMainTrainingRoutingModule { }

