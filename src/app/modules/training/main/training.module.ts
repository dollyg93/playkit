import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';

@NgModule({
    imports: [SharedModule, TrainingRoutingModule],
    declarations: [TrainingComponent]
})
export class TrainingModule { }
