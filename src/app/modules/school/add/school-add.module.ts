import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { SchoolAddRoutingModule } from './school-add-routing.module';
import { SchoolAddComponent } from './school-add.component';

@NgModule({
    imports: [SharedModule, SchoolAddRoutingModule],
    declarations: [SchoolAddComponent]
})
export class SchoolAddModule {

}
