import { Component, OnInit } from '@angular/core';
import {Playlist} from "../../_models/playlist";
import {PlaylistService} from "../../_services/playlist.service";

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  public playlists: Playlist[];
  public selectedPlaylist: Playlist;

  constructor(
    private playlistService: PlaylistService
  ) { }

  public printPlaylists() {
    return this.playlistService.printPlaylists()
      .subscribe(playlists => this.playlists = playlists);
  }
  ngOnInit() {
    this.printPlaylists();
  }

}
