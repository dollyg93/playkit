import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StartService {
  constructor() {}

  getAll(): Observable<Array<any>> {
    return of(null);
  }

  getSingle(id: number): Observable<any> {
    return of(null);
  }
}