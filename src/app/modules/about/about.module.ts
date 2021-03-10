import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { AboutRoutingModule } from './about-routing.module';
// import { AboutEditComponent } from './components/about-edit/about-edit.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [AboutComponent],
  imports: [AboutRoutingModule, SharedModule]
})
export class AboutModule {}
