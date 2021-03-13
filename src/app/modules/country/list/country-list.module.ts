import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { CountryListComponent } from './country-list.component';

@NgModule({
    imports: [SharedModule],
    exports: [CountryListComponent],
    declarations: [CountryListComponent]
})
export class CountryListModule { }
