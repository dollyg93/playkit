import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { TrainingTaskDetailRoutingModule } from './training-task-detail-routing.module';
import { TrainingTaskDetailComponent } from './training-task-detail.component';

@NgModule({
    imports: [SharedModule, TrainingTaskDetailRoutingModule],
    declarations: [TrainingTaskDetailComponent]
})
export class TrainingTaskDetailModule { }
