import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { ActivityCardComponent } from './activitiy-card.component';
import { ActivityCardRoutingModule } from './activity-card-routing.module';

@NgModule({
    imports: [SharedModule, ActivityCardRoutingModule],
    declarations: [ActivityCardComponent]
})
export class ActivityCardModule { }
