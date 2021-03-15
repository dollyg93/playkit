import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { BeginTrainingRouting } from './begin-training-routing.module';
import { BeginTrainingComponent } from './begin-training.component';

@NgModule({
    imports: [SharedModule, BeginTrainingRouting],
    declarations: [BeginTrainingComponent]
})
export class BeginTrainingModule { }
