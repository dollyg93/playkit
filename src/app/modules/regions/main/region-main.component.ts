import { Component, OnInit } from '@angular/core';
import { CoreService } from '@app/core/service/core.service';

@Component({
    selector: 'app-region',
    templateUrl: 'region-main.component.html'
})

export class RegionMainComponent implements OnInit {
    constructor(private coreService: CoreService) { }

    ngOnInit() { }

    navigateTo() {
        this.coreService.navigateToPath('/dashboard/add-region')
    }
}