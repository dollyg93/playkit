import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { ClassAddRoutingModule } from './class-add-routing.module';

import { ClassAddComponent } from './class-add.component';

@NgModule({
    imports: [ClassAddRoutingModule, SharedModule],
    declarations: [ClassAddComponent]
})
export class ClassAddModule { 

}
