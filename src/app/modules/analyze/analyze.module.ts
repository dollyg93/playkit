import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AnalyzeRoutingModule } from './analyze-routing.module';
import { AnalyzeComponent } from './analyze.component';


@NgModule({
  declarations: [AnalyzeComponent],
  imports: [SharedModule, AnalyzeRoutingModule]
})
export class AnalyzeModule {}
