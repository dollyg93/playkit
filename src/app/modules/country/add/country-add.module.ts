import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { CountryAddRoutingModule } from './country-add-routing.module';
import { CountryAddComponent } from './country-add.component';

@NgModule({
    imports: [SharedModule, CountryAddRoutingModule],
    declarations: [CountryAddComponent]
})
export class CountryAddModule { }
