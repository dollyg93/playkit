import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { TrainingTaskViewRoutingModule } from './training-task-routing.module';
import { TrainingTaskViewComponent } from './training-task.component';

@NgModule({
    imports: [SharedModule, TrainingTaskViewRoutingModule],
    declarations: [TrainingTaskViewComponent]
})
export class TrainingTaskViewModule { }
