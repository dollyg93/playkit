import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '@app/core/service/core.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-country-detail',
    templateUrl: 'country-detail.component.html'
})

export class CountryDetailComponent implements OnInit {
    countryId: string;
    constructor(private route: ActivatedRoute, 
        private coreService: CoreService, 
        private location: Location) {
        this.route.params.subscribe((params) => {
            this.countryId = params.id;
        })
    }

    ngOnInit() { }

    editCountry() {
        this.coreService.editCountry(this.countryId);
        this.coreService.navigateToPath('/dashboard/edit-country');
    }

    deleteCountry() {
        this.location.back();
    }
}