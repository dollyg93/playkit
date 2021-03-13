import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditMainAssessComponent } from './edit-main-assess.component';

const routes: Routes = [
  {
    path: '',
    component: EditMainAssessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditMainAssessRoutingModule { }

