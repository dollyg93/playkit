import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';

@NgModule({
    imports: [SharedModule, TaskRoutingModule],
    declarations: [TaskComponent]
})
export class TaskModule { }
