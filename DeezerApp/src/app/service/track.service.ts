import { Injectable } from '@angular/core';
import { Observable, of} from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor( private http: HttpClient) { }

  getTracks(): Observable<any> {
    return this.http.get('http://localhost:8080/track');
  }
}
