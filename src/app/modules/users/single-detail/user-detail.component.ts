import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from '@app/core/service/core.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-user-detail',
    templateUrl: 'user-detail.component.html'
})

export class UserDetailComponent implements OnInit {
    userId: string;
    constructor(private route: ActivatedRoute, 
        private router: Router,
        private coreService: CoreService, 
        private location: Location) {
        this.route.params.subscribe((params) => {
            this.userId = params.id;
        })
    }

    ngOnInit() { }

    editUser() {
        this.coreService.editUser(this.userId);
        this.coreService.navigateToPath('/dashboard/edit-user');
    }

    deleteUser() {
        this.location.back();
    }

    navigateTo(participant) {
        this.router.navigate([participant], {relativeTo: this.route});
    }
}