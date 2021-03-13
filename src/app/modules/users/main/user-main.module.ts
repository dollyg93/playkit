import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { UserListModule } from '../list/user-list.module';

import { UserMainRoutingModule } from './user-main-routing.module';
import { UserMainComponent } from './user-main.component';

@NgModule({
    imports: [SharedModule, UserMainRoutingModule, UserListModule],
    declarations: [UserMainComponent]
})
export class UserMainModule { 

}
