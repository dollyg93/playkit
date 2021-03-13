import { Component, OnInit } from '@angular/core';
import { CoreService } from '@app/core/service/core.service';

@Component({
    selector: 'app-class-list',
    templateUrl: 'class-list.component.html'
})

export class ClassListComponent implements OnInit {
    constructor(private coreService: CoreService) { }

    ngOnInit() { }

    navigateTo(item) {
        this.coreService.navigateToPath(`/dashboard/class/${item}`);
    }
}