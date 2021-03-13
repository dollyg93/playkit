import { Component, OnInit } from '@angular/core';
import { CoreService } from '@app/core/service/core.service';

@Component({
    selector: 'app-country-list',
    templateUrl: 'country-list.component.html'
})

export class CountryListComponent implements OnInit {
    constructor(private coreService: CoreService) { }

    ngOnInit() { }

    navigateTo(item) {
        this.coreService.navigateToPath(`/dashboard/country/${item}`);
    }
}