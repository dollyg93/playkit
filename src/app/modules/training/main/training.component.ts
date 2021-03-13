import { Component, OnInit } from '@angular/core';
import { CoreService } from '@app/core/service/core.service';

@Component({
    selector: 'app-training',
    templateUrl: 'training.component.html'
})

export class TrainingComponent implements OnInit {
    constructor(private coreService: CoreService) { }

    ngOnInit() { }

    navigateTo(path) {
        this.coreService.navigateToPath(path);
    }
}