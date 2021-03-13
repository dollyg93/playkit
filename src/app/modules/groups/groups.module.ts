import { NgModule } from '@angular/core';
import { GroupService } from '@app/core/service/group.service';
import { SharedModule } from '@app/shared/shared.module';
import { AdminGroupMainComponent } from './components/for-admin/main.component';
import { PractionerGroupMainComponent } from './components/for-practioner/main.component';

import { GroupComponent } from './components/main/group.component';
import { GroupRoutingModule } from './groups.routing.module';

@NgModule({
    imports: [GroupRoutingModule, SharedModule],
    declarations: [
        GroupComponent, 
        PractionerGroupMainComponent, 
        AdminGroupMainComponent],
    providers: [GroupService]
})
export class GroupsModule { }
