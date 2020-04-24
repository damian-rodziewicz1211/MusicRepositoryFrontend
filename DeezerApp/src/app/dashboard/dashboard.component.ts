import { Component, OnInit } from '@angular/core';
import { Track } from "../track";
import { TrackService } from "../service/track.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tracks: Track[];

  constructor(private trackService: TrackService) { }

  getTracks(): void {
    this.trackService.getTracks().subscribe(tracks => this.tracks = tracks);
  }

  ngOnInit() {
    this.getTracks();
  }

}
