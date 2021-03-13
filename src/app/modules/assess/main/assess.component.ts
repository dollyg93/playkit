import { Component, OnInit } from '@angular/core';
import { CoreService } from '@app/core/service/core.service';

@Component({
    selector: 'app-assess',
    templateUrl: 'assess.component.html'
})

export class AssessComponent implements OnInit {
    constructor(private coreService: CoreService) { }

    ngOnInit() { }

    navigateTo() {
        this.coreService.navigateToPath('/dashboard/assess/edit-page');
    }
}