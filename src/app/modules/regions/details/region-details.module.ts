import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { RegionDetailRoutingModule } from './region-detail-routing.module';
import { RegionDetailComponent } from './region-detail.component';

@NgModule({
    imports: [SharedModule, RegionDetailRoutingModule],
    declarations: [RegionDetailComponent]
})
export class RegionDetailModule {

}