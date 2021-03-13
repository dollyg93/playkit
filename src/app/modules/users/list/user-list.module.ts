import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';

@NgModule({
    imports: [UserListRoutingModule, SharedModule],
    declarations: [UserListComponent],
    exports: [UserListComponent]
})
export class UserListModule { 

}
