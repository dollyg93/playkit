import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { BeginAssesRoutingModule } from './begin-assessment-routing.module';
import { BeginAssessmentComponent } from './begin-assessment.component';

@NgModule({
    imports: [SharedModule, BeginAssesRoutingModule],
    declarations: [BeginAssessmentComponent]
})
export class BeginAssesModule { }
