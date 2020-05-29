import { Component, OnInit } from '@angular/core';

import { TrackService } from "../../service/track.service";

@Component({
  selector: 'app-mymusic',
  templateUrl: './mymusic.component.html',
  styleUrls: ['./mymusic.component.css']
})
export class MymusicComponent implements OnInit {

  tracks: Array<any>;

  constructor(private trackService: TrackService) { }

  getTracks(): void {
    this.trackService.getTracks().subscribe(tracks => {
      this.tracks = tracks
    });
  }

  ngOnInit() {
    this.getTracks();
  }

}
