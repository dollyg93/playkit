import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { SchoolListComponent } from './school-list.component';

@NgModule({
    imports: [SharedModule],
    exports: [SchoolListComponent],
    declarations: [SchoolListComponent]
})
export class SchoolListModule { }
