import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AboutEditRoutingModule } from './about-edit-routing.module';

import { AboutEditComponent } from './about-edit.component';


@NgModule({
  declarations: [AboutEditComponent],
  imports: [AboutEditRoutingModule, SharedModule]
})
export class AboutEditModule {}
