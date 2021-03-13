import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { ClassListsModule } from '../list/class-list.module';
import { PractitionerClassExpandComponent } from './practitioner-class.component';

@NgModule({
    imports: [SharedModule, ClassListsModule],
    declarations: [PractitionerClassExpandComponent],
    exports: [PractitionerClassExpandComponent]
})
export class PractitionerClassExpandModule { }
