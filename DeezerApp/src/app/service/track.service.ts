import { Injectable } from '@angular/core';
import { Track } from "../track";
import { TRACKS } from "../mock-tracks";
import { Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor() { }

  getTracks(): Observable<Track[]> {
    return of(TRACKS);
  }
}
