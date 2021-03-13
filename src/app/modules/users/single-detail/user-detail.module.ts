import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { UserDetailRoutingModule } from './user-detail-routing.module';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
    imports: [SharedModule, UserDetailRoutingModule],
    declarations: [UserDetailComponent]
})
export class UserDetailModule { 

}
