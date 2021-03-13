import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '@app/core/service/core.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-region-detail',
    templateUrl: 'region-detail.component.html'
})

export class RegionDetailComponent implements OnInit {
    regionId: string;
    constructor(private route: ActivatedRoute, 
        private coreService: CoreService, 
        private location: Location) {
        this.route.params.subscribe((params) => {
            this.regionId = params.id;
        })
    }

    ngOnInit() { }

    editRegion() {
        this.coreService.editRegion(this.regionId);
        this.coreService.navigateToPath('/dashboard/edit-region');
    }

    deleteRegion() {
        this.location.back();
    }
}