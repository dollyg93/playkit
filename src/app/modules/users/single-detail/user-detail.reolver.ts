import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '@app/core/service/user.service';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserResolver implements Resolve<any> {
  constructor(private service: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.getUser(route.paramMap.get('id'));
  }
}