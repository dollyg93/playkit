import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { RegionListComponent } from './region-list.component';

@NgModule({
    imports: [SharedModule],
    exports: [RegionListComponent],
    declarations: [RegionListComponent]
})
export class RegionListModule { }
