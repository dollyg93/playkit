import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from '@app/core/service/core.service';

@Component({
    selector: 'app-training',
    templateUrl: 'training.component.html'
})

export class TrainingComponent implements OnInit {
    constructor(private coreService: CoreService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() { }

    navigateTo(path) {
        this.coreService.navigateToPath(path);
    }

    beginTraining() {
        this.router.navigate(['begin'], {relativeTo: this.route})
    }
}