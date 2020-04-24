import { Injectable } from '@angular/core';
import { Track } from "../track";
import { TRACKS } from "../mock-tracks";

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor() { }

  getTracks(): Track[] {
    return TRACKS;
  }
}
