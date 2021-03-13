import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { ClassDetailRoutingModule } from './class-detail-routing.module';
import { ClassDetailComponent } from './class-detail.component';

@NgModule({
    imports: [SharedModule, ClassDetailRoutingModule],
    declarations: [ClassDetailComponent]
})
export class ClassDetailModule {

}
