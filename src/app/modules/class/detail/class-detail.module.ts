import { NgModule } from '@angular/core';
import { ParticipantTableComponent } from '@app/shared/component/participants-table/participant-table.component';
import { SharedModule } from '@app/shared/shared.module';
import { ClassDetailRoutingModule } from './class-detail-routing.module';
import { ClassDetailComponent } from './class-detail.component';

@NgModule({
    imports: [SharedModule, ClassDetailRoutingModule],
    declarations: [ClassDetailComponent, ParticipantTableComponent]
})
export class ClassDetailModule {

}
