import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '@app/core/service/core.service';

@Component({
    selector: 'app-school-detail',
    templateUrl: 'school-detail.component.html'
})

export class SchoolDetailComponent implements OnInit {
    schoolId: string;
    constructor(private route: ActivatedRoute, 
        private coreService: CoreService, 
        private location: Location) {
        this.route.params.subscribe((params) => {
            this.schoolId = params.id;
        })
    }

    ngOnInit() { }

    editSchool() {
        this.coreService.editSchool(this.schoolId);
        this.coreService.navigateToPath('/dashboard/edit-school');
    }

    deleteSchool() {
        this.location.back();
    }
}