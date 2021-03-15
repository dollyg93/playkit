import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { TaskDetailRoutingModule } from './task-detail-routing.module';
import { TaskDetailComponent } from './task-detail.component';

@NgModule({
    imports: [SharedModule, TaskDetailRoutingModule],
    declarations: [TaskDetailComponent]
})
export class TaskDetailModule { }
