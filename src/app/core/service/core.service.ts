import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CoreService {
    editClassSub = new Subject<string>();
    editClassSub$ = this.editClassSub.asObservable();
    editUserSub = new Subject<string>();
    editUserSub$ = this.editUserSub.asObservable();
    editSchoolSub = new Subject<string>();
    editSchoolSub$ = this.editSchoolSub.asObservable();
    editRegionSub = new Subject<string>();
    editRegionSub$ = this.editRegionSub.asObservable();
    editCountrySub = new Subject<string>();
    editCountrySub$ = this.editCountrySub.asObservable();
    constructor(private router: Router, private route: ActivatedRoute) { }

    navigateToPath(path) {
        this.router.navigate([path]);
    }

    navigateToRelative(path) {
        this.router.navigate([path], {relativeTo: this.route});
    }

    editClass(id) {
        this.editClassSub.next(id);
    }
    
    editUser(id) {
        this.editUserSub.next(id);
    }

    editSchool(id) {
        this.editSchoolSub.next(id);
    }

    
    editRegion(id) {
        this.editRegionSub.next(id);
    }

    editCountry(id) {
        this.editCountrySub.next(id);
    }
}