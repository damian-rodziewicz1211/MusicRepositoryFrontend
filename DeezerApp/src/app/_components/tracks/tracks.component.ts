import { Component, OnInit } from '@angular/core';
import {Track} from "../../_models/track";
import {TrackService} from "../../_services/track.service";
import {AlertService} from "../../_services/alert.service";

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
    private trackService: TrackService,
    private alertService: AlertService
  ) { }

  public printTracks() {
    return this.trackService.printTracks()
      .subscribe(tracks => this.tracks = tracks);
  }


  public deleteTrack() {
    this.alertService.clear();
    this.trackId = this.selectedTrack.trackId;
    this.trackService.deleteTrack(this.trackId).subscribe();
    this.alertService.success(`Track ${this.selectedTrack.title} has been removed from favourites`);
    this.refresh();
  }

  public onSelect(track: Track): void {
    this.selectedTrack = track;
    this.msbapTitle = track.artist + ' - ' + track.title;
    this.msbapAudioUrl = track.preview;
    this.msbapDisplayTitle = true;

  }

  public refresh() {
    this.printTracks();
  }

  ngOnInit() {
    this.printTracks();
  }

}
