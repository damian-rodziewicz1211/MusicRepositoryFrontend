import { Component, OnInit } from '@angular/core';
import {User} from "../../_models/user";
import {AuthenticationService} from "../../_services/authentication.service";
import {UserService} from "../../_services/user.service";
import {TrackService} from "../../_services/track.service";
import {Track} from "../../_models/track";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;


  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private trackService: TrackService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }


  ngOnInit() {

  }

}
