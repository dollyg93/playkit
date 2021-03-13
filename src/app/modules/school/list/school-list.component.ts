import { Component, OnInit } from '@angular/core';
import { CoreService } from '@app/core/service/core.service';

@Component({
    selector: 'app-school-list',
    templateUrl: 'school-list.component.html'
})

export class SchoolListComponent implements OnInit {
    constructor(private coreService: CoreService) { }

    ngOnInit() { }

    navigateTo(item) {
        this.coreService.navigateToPath(`/dashboard/school/${item}`);
    }
}