import { Component, OnInit } from '@angular/core';
import {Track} from "../../_models/track";
import {TrackService} from "../../_services/track.service";

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  public tracks: Track[] ;
  public selectedTrack: Track;

  constructor(
    private trackService: TrackService
  ) { }

  public printTracks() {
    return this.trackService.printTracks()
      .subscribe(tracks => this.tracks = tracks);
  }

  ngOnInit() {
    this.printTracks();
  }

}
