import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { ClassListRoutingModule } from './class-list-routing.module';
import { ClassListComponent } from './class-list.componet';

@NgModule({
    imports: [ClassListRoutingModule, SharedModule],
    declarations: [ClassListComponent],
    exports: [ClassListComponent]
})
export class ClassListsModule { }
