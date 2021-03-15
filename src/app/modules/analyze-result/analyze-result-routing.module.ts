import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyzeResultComponent } from './analyze-result.component';

const routes: Routes = [
  {
    path: '',
    component: AnalyzeResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyzeResultRouting { }
