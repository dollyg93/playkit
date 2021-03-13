import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { TaskAddRoutingModule } from './task-add-routing.module';
import { TaskAddComponent } from './task-add.component';

@NgModule({
    imports: [SharedModule, TaskAddRoutingModule],
    declarations: [TaskAddComponent]
})
export class TaskAddModule { }
