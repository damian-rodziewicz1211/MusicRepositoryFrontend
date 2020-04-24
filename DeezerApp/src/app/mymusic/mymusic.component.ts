import { Component, OnInit } from '@angular/core';
import { Track } from "../track";
import { TrackService } from "../service/track.service";

@Component({
  selector: 'app-mymusic',
  templateUrl: './mymusic.component.html',
  styleUrls: ['./mymusic.component.css']
})
export class MymusicComponent implements OnInit {

  tracks: Track[];

  constructor(private trackService: TrackService) { }

  getTracks(): void {
    this.tracks = this.trackService.getTracks();
  }

  ngOnInit() {
    this.getTracks();
  }

}
