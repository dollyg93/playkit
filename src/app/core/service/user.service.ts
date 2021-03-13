import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
    getUser(arg0: string): Observable<any> {
        return of([1,2,3,4,5]);
    }
    constructor() { }
    
}