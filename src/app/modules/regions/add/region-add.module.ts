import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { RegionAddRoutingModule } from './region-add-routing.module';
import { RegionAddComponent } from './region-add.component';

@NgModule({
    imports: [SharedModule, RegionAddRoutingModule],
    declarations: [RegionAddComponent]
})
export class RegionAddModule { }
