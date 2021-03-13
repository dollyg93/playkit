import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { EditMainAssessRoutingModule } from './edit-main-assess-routing.module';
import { EditMainAssessComponent } from './edit-main-assess.component';

@NgModule({
    imports: [SharedModule, EditMainAssessRoutingModule],
    declarations: [EditMainAssessComponent]
})
export class EditMainAssessModule { }