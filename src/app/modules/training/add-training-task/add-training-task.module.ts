import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { AddTrainingTaskViewRoutingModule } from './add-training-task-routing.module';
import { AddTrainingTaskViewComponent } from './add-training-task.component';

@NgModule({
    imports: [SharedModule, AddTrainingTaskViewRoutingModule],
    declarations: [AddTrainingTaskViewComponent]
})
export class AddTrainingTaskViewModule { }
