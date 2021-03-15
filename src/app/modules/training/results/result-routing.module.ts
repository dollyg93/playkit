import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PractionerTrainingResult } from './result.component';

const routes: Routes = [
  {
    path: '',
    component: PractionerTrainingResult
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PractionerTRRoutingModule {}
