import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { CountryDetailRoutingModule } from './country-detail-routing.module';
import { CountryDetailComponent } from './country-detail.component';

@NgModule({
    imports: [SharedModule, CountryDetailRoutingModule],
    declarations: [CountryDetailComponent]
})
export class CountryDetailModule { }
