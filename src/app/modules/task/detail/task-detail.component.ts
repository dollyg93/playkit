import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-task-add',
    templateUrl: 'task-detail.component.html'
})

export class TaskDetailComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() { }

    beginAssessment() {
        this.router.navigate(['begin-assessment'], {relativeTo: this.route});
    }

    editTask() {
        this.router.navigate(['edit'], {relativeTo: this.route});
    }
}