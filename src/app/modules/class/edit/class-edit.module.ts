import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { ClassEditRoutingModule } from './class-edit-routing.module';

import { ClassEditComponent } from './class-edit.component';

@NgModule({
    imports: [ClassEditRoutingModule, SharedModule],
    declarations: [ClassEditComponent]
})
export class ClassEditModule {

}
