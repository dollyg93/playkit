import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { SchoolListModule } from '../list/school-list.module';
import { SchoolMainRoutingModule } from './school-main-routing.module';

import { SchoolMainComponent } from './school-main.component';

@NgModule({
    imports: [SharedModule, SchoolListModule, SchoolMainRoutingModule],
    declarations: [SchoolMainComponent]
})
export class SchoolMainModule { }
