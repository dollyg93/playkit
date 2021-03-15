import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { TrainingAttemptComponent } from '../attemp/attemp.component';
// import { TrainingAttemptModule } from '../attemp/attemp.module';
import { PractionerTRRoutingModule } from './result-routing.module';
import { PractionerTrainingResult } from './result.component';

@NgModule({
  imports: [SharedModule, PractionerTRRoutingModule],
  declarations: [PractionerTrainingResult, TrainingAttemptComponent]
})
export class PractionerTRModule {}
