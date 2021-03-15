import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from '@app/core/service/core.service';
import data from '../../assess/main/task.json';

@Component({
    selector: 'app-task',
    templateUrl: 'task.component.html'
})

export class TaskComponent implements OnInit {
    tasks: object;
    constructor(private coreService: CoreService,
        private router: Router, private route: ActivatedRoute) { 
        this.tasks = data;
    }

    ngOnInit() { }

    navigateTo(path) {
        this.coreService.navigateToPath(path);
    }

    getDetail(id) {
        this.router.navigate([id], {relativeTo: this.route});
    }
}