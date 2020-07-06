import { Component, OnInit } from '@angular/core';
import {User} from "../../_models/user";
import {AuthenticationService} from "../../_services/authentication.service";
import {UserService} from "../../_services/user.service";
import {TrackService} from "../../_services/track.service";
import {Track} from "../../_models/track";
import {SearchService} from "../../_services/search.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Album} from "../../_models/album";
import {AlbumService} from "../../_services/album.service";
import {AlertService} from "../../_services/alert.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  tracks: Track[];
  selectedTrack: Track;
  albums: Album[];
  selectedAlbum: Album;
  id : number;

  queryForm: FormGroup;
  submitted : boolean;

  msbapTitle : string = '';
  msbapAudioUrl : string = '';
  msbapDisplayTitle = false;
  msbapDisplayVolumeControls: boolean
  msbapAutoPlay = false;
  divider = false;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private searchService: SearchService,
    private trackService: TrackService,
    private albumService: AlbumService,
    private formBuilder:FormBuilder,
    private alertService:AlertService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.queryForm = this.formBuilder.group({
      query: ['', Validators.required]
    });
    this.currentUser.username = this.userService.username;
  }

  get q() {
    return this.queryForm.controls;
  }

  public getTracks(q : string) {
    return this.searchService.getTracks(q)
      .subscribe(tracks => this.tracks = tracks);
  }

  public getAlbums(q : string) {
    return this.searchService.getAlbums(q)
      .subscribe( albums => this.albums = albums);
  }

  public addTrack() {
    this.alertService.clear();
    this.id = this.selectedTrack.deezerId;
    this.alertService.success(`Track ${this.selectedTrack.title} has been added to favourites`)
    this.trackService.addTrack(this.id).subscribe();
  }

  public addAlbum() {
    this.alertService.clear();
    this.id = this.selectedAlbum.deezerId;
    this.alertService.success(`Album ${this.selectedAlbum.title} has been added to favourites`)
    return this.albumService.addAlbum(this.id).subscribe();
  }

  public onSelectTrack(track: Track): void {
    this.selectedTrack = track;
    this.msbapTitle = track.artist + ' - ' + track.title;
    this.msbapAudioUrl = track.preview;
    this.msbapDisplayTitle = true;

  }

  public onSelectAlbum(album: Album): void {
    this.selectedAlbum = album;
  }

  public onSubmit() {
    this.submitted = true;

    this.alertService.clear();

    if(this.queryForm.invalid){
      return;
    }

    if(this.divider) {
      this.getTracks(this.q.query.value);
    }

    if(!this.divider){
      this.getAlbums(this.q.query.value);
    }


  }

  public onTrackClick(): void {
    this.divider = true;
  }

  public onAlbumClick(): void {
    this.divider = false;
  }




}
