import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Track} from "../_models/track";

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly TRACK_URL: string = 'http://localhost:8080/track/365484491'
  constructor(private http: HttpClient) { }

  public getTracks(): Observable<Track> {
    return this.http.get<Track>(`${this.TRACK_URL}`);
  }
}
