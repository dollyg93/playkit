import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { EditMainTaskRoutingModule } from './edit-main-task-routing.module';
import { EditMainTaskComponent } from './edit-main-task.component';

@NgModule({
    imports: [SharedModule, EditMainTaskRoutingModule],
    declarations: [EditMainTaskComponent]
})
export class EditMainTaskModule { }