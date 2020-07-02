import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../../_services/album.service";
import {Album} from "../../_models/album";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  public album: Album;
  public albums: Album[];
  public selectedAlbum: Album;

  constructor(
    private albumService: AlbumService
  ) { }

  public printAlbums() {
    return this.albumService.printAlbums()
      .subscribe(albums => this.albums = albums);
  }

  public getAlbum() {
    return this.albumService.getAlbum()
      .subscribe(album => this.album = album);
  }

  ngOnInit() {
    //this.getAlbum();
    this.printAlbums();
  }

}
