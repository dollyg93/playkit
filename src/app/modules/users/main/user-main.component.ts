import { Component, OnInit } from '@angular/core';
import { CoreService } from '@app/core/service/core.service';

@Component({
    selector: 'app-user-main',
    templateUrl: 'user-main.component.html'
})

export class UserMainComponent implements OnInit {
    constructor(private coreService: CoreService) { }

    ngOnInit() { }

    navigateTo() {
        this.coreService.navigateToPath('dashboard/add-user');
    }
}