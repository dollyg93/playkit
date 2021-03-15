import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityCardComponent } from './activitiy-card.component';

const routes: Routes = [
  {
    path: '',
    component: ActivityCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityCardRoutingModule { }
