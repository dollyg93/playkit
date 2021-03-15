import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AnalyzeResultRouting } from './analyze-result-routing.module';
import { AnalyzeResultComponent } from './analyze-result.component';

@NgModule({
  declarations: [AnalyzeResultComponent],
  imports: [SharedModule, AnalyzeResultRouting]
})
export class AnalyzeResultModule {}
