import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../../_services/album.service";
import {Album} from "../../_models/album";
import {Track} from "ngx-audio-player";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  public album: Album;
  public albums: Album[];
  public selectedAlbum: Album;
  public albumId: number;
  public isClicked = false;



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

  public deleteAlbum() {
    this.albumId = this.selectedAlbum.albumId;
    window.alert("Track removed from favourites");
    return this.albumService.deleteAlbum(this.albumId).subscribe();
  }

  public refresh() {
    window.location.reload();
  }

  public onSelect(album: Album): void {
    this.selectedAlbum = album;
    this.isClicked = true;
  }

    ngOnInit() {
    //this.getAlbum();
    this.printAlbums();
  }

}
