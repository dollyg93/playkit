import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { RegionListModule } from '../list/region-list.module';
import { RegionMainRoutingModule } from './region-main-routing.module';
import { RegionMainComponent } from './region-main.component';

@NgModule({
    imports: [SharedModule, RegionMainRoutingModule, RegionListModule],
    declarations: [RegionMainComponent]
})
export class RegionMainModule { }
