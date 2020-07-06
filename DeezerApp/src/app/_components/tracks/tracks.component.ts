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
  public tmp: string;


  msbapTitle : string = '';
  msbapAudioUrl : string = '';
  msbapDisplayTitle = false;
  msbapDisplayVolumeControls: boolean
  msbapAutoPlay = false;
  public trackId: number;


  constructor(
    private trackService: TrackService
  ) { }

  public printTracks() {
    return this.trackService.printTracks()
      .subscribe(tracks => this.tracks = tracks);
  }


  public deleteTrack() {
    this.trackId = this.selectedTrack.trackId;
    window.alert("Track removed from favourites");
    return this.trackService.deleteTrack(this.trackId).subscribe();
  }

  public onSelect(track: Track): void {
    this.selectedTrack = track;

    this.msbapTitle = track.artist + ' - ' + track.title;
    this.msbapAudioUrl = track.preview;
    this.msbapDisplayTitle = true;

  }

  public refresh() {
    window.location.reload();
  }

  ngOnInit() {
    this.printTracks();
  }

}
