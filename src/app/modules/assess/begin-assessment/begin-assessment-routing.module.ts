import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeginAssessmentComponent } from './begin-assessment.component';

const routes: Routes = [
  {
    path: '',
    component: BeginAssessmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeginAssesRoutingModule { }
