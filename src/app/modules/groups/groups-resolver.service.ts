import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GroupsResolver implements Resolve<any> {
    resolve(route: ActivatedRouteSnapshot): any {
        return ;
    }
}