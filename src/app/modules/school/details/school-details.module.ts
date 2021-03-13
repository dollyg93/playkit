import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { SchoolDetailRoutingModule } from './school-detail-routing.module';
import { SchoolDetailComponent } from './school-detail.component';

@NgModule({
    imports: [SharedModule, SchoolDetailRoutingModule],
    declarations: [SchoolDetailComponent]
})
export class SchoolDetailModule {

}
