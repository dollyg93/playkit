import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '@app/core/service/core.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-class-detail',
    templateUrl: './class-detail.component.html'
})

export class ClassDetailComponent implements OnInit {
    classId: string;
    constructor(private route: ActivatedRoute, 
        private coreService: CoreService, 
        private location: Location) {
        this.route.params.subscribe((params) => {
            this.classId = params.id;
        })
    }

    ngOnInit() { }

    editClass() {
        this.coreService.editClass(this.classId);
        this.coreService.navigateToPath('/dashboard/edit-class');
    }

    deleteClass() {
        this.location.back();
    }
}