import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'training-task-detail',
    templateUrl: 'training-task-detail.component.html'
})
export class TrainingTaskDetailComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() { }

    editTrainingTask() {
        this.router.navigate(['edit'], {relativeTo: this.route});
    }
}
