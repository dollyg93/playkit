import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { CountryListModule } from '../list/country-list.module';
import { CountryMainRoutingModule } from './country-main-routing.module';
import { CountryMainComponent } from './country-main.component';

@NgModule({
    imports: [SharedModule, CountryMainRoutingModule, CountryListModule],
    declarations: [CountryMainComponent]
})
export class CountryMainModule { }