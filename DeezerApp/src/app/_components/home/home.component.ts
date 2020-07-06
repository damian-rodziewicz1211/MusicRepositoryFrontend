import { Component, OnInit } from '@angular/core';
import {User} from "../../_models/user";
import {AuthenticationService} from "../../_services/authentication.service";
import {UserService} from "../../_services/user.service";
import {TrackService} from "../../_services/track.service";
import {Track} from "../../_models/track";
import {SearchService} from "../../_services/search.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Album} from "../../_models/album";
import {AlbumService} from "../../_services/album.service";

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

  query = new FormControl('');
  submitted = false;

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
    private albumService: AlbumService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
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
    this.id = this.selectedTrack.deezerId;
    window.alert("Track added to favourites")
    return this.trackService.addTrack(this.id).subscribe();
  }

  public addAlbum() {
    this.id = this.selectedAlbum.deezerId;
    window.alert("Album added to favourites")
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
    if(this.divider) {
      this.submitted = true;
      this.getTracks(this.query.value);
    }
    if(!this.divider){
      this.submitted = true;
      this.getAlbums(this.query.value);
    }
  }

  public onTrackClick(): void {
    this.divider = true;
  }

  public onAlbumClick(): void {
    this.divider = false;
  }


  ngOnInit(): void {
  }

}
