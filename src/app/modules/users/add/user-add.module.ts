import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { UserAddRoutingModule } from './user-add-routing.module';
import { UserAddComponent } from './user-add.component';

@NgModule({
    imports: [UserAddRoutingModule, SharedModule],
    declarations: [UserAddComponent]
})
export class UserAddModule { 

}
