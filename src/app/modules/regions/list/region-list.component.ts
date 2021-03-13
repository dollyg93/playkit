import { Component, OnInit } from '@angular/core';
import { CoreService } from '@app/core/service/core.service';

@Component({
    selector: 'app-region-list',
    templateUrl: 'region-list.component.html'
})

export class RegionListComponent implements OnInit {
    constructor(private coreService: CoreService) { }

    ngOnInit() { }

    navigateTo(item) {
        this.coreService.navigateToPath(`/dashboard/region/${item}`);
    }
}