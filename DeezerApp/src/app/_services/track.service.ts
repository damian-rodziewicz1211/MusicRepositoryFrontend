import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Track} from "../_models/track";



@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly TRACK_URL: string = 'http://localhost:8080/track';



  constructor(private http: HttpClient) { }

  public getTracks(): Observable<Track> {
    return this.http.get<Track>(`${this.TRACK_URL}`+'/365484491');
  }

  public printTracks(): Observable<Track[]> {
    return this.http.get<Track[]>(this.TRACK_URL);
  }

  public addTrack(trackId: number): Observable<string> {
    return this.http.post<string>(`${this.TRACK_URL}`, {id: trackId});
  }

  public deleteTrack( trackId: number): Observable<any> {

    console.warn(trackId);
    return this.http.delete(`${this.TRACK_URL}/` + trackId );
  }
}
