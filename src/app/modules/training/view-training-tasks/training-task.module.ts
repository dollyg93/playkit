import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { TrainingResultList } from '../training-results-list/training-result-list.component';
import { TrainingTaskList } from '../training-task-list/training-task-list.component';
import { TrainingTaskViewRoutingModule } from './training-task-routing.module';
import { TrainingTaskViewComponent } from './training-task.component';

@NgModule({
    imports: [SharedModule, TrainingTaskViewRoutingModule],
    declarations: [TrainingTaskViewComponent, TrainingTaskList, TrainingResultList]
})
export class TrainingTaskViewModule { }
