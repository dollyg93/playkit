import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditMainTaskComponent } from './edit-main-task.component';

const routes: Routes = [
  {
    path: '',
    component: EditMainTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditMainTaskRoutingModule { }

