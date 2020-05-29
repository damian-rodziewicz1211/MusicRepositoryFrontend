import { Component, OnInit } from '@angular/core';
import { Track } from "../../model/track";
import { TrackService } from "../../service/track.service";
import {User} from "../../model/user";
import {AuthService} from "../../service/auth.service";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  tracks: Track[];

  constructor(private trackService: TrackService,
              private authService: AuthService,
              private userService: UserService
  ) {
    this.currentUser = this.authService.currentUserValue;
  }

  getTracks(): void {
    this.trackService.getTracks().subscribe(tracks => this.tracks = tracks);
  }

  ngOnInit() {
    this.getTracks();
  }

}
