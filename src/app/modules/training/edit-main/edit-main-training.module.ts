import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { EditMainTrainingRoutingModule } from './edit-main-training-routing.module';
import { EditMainTrainingComponent } from './edit-main-training.component';

@NgModule({
    imports: [SharedModule, EditMainTrainingRoutingModule],
    declarations: [EditMainTrainingComponent]
})
export class EditMainTrainingModule { }
