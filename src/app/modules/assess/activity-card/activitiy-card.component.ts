import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'activity-card',
    templateUrl: 'activitiy-card.component.html'
})

export class ActivityCardComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() { }

    beginAssessment() {
        this.router.navigate(['begin-assessment'], {relativeTo: this.route});
    }

    editAssess() {
        this.router.navigate(['edit'], {relativeTo: this.route});
    }
}