import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from '@app/core/service/core.service';
import data from './task.json';

@Component({
    selector: 'app-assess',
    templateUrl: 'assess.component.html'
})

export class AssessComponent implements OnInit {
    assessments: object;
    constructor(private coreService: CoreService, private router: Router, private route: ActivatedRoute) { 
        this.assessments = data;
    }

    ngOnInit() { }

    navigateTo() {
        this.coreService.navigateToPath('/dashboard/assess/edit-page');
    }

    showActvityCard(id) {
        this.router.navigate([id], {relativeTo: this.route});
    }
}