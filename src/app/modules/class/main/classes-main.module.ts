import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { ClassListsModule } from '../list/class-list.module';
import { ClassMainRoutingModule } from './classes-main-routing.module';
import { ClassesMainComponent } from './classes-main.component';

@NgModule({
    imports: [SharedModule, ClassMainRoutingModule, ClassListsModule],
    declarations: [ClassesMainComponent]
})
export class ClassMainModule { 

}
