import { Component, OnInit } from '@angular/core';
import { CoreService } from '@app/core/service/core.service';

@Component({
    selector: 'app-task',
    templateUrl: 'task.component.html'
})

export class TaskComponent implements OnInit {
    constructor(private coreService: CoreService) { }

    ngOnInit() { }

    navigateTo(path) {
        this.coreService.navigateToPath(path);
    }
}