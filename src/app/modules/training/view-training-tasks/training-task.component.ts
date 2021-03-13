import { Component, OnInit } from '@angular/core';
import { CoreService } from '@app/core/service/core.service';

@Component({
    selector: 'app-training-tasks',
    templateUrl: 'training-task.component.html'
})

export class TrainingTaskViewComponent implements OnInit {
    constructor(private coreService: CoreService) { }

    ngOnInit() { }

    navigateTo() {
        this.coreService.navigateToRelative('dashboard/training-tasks/add');
    }
}