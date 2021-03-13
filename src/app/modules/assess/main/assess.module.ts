import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { AssesRoutingModule } from './assess-routing.module';
import { AssessComponent } from './assess.component';

@NgModule({
    imports: [SharedModule, AssesRoutingModule],
    declarations: [AssessComponent]
})
export class AssessModule { }
