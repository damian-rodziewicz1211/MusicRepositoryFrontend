import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../../_services/album.service";
import {Album} from "../../_models/album";
import {Track} from "ngx-audio-player";
import {AlertService} from "../../_services/alert.service";

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
    private albumService: AlbumService,
    private alertService: AlertService
  ) { }

  public printAlbums() {
    return this.albumService.printAlbums()
      .subscribe(albums => this.albums = albums);
  }

  public deleteAlbum() {
    this.alertService.clear();
    this.albumId = this.selectedAlbum.albumId;
    this.albumService.deleteAlbum(this.albumId).subscribe();
    this.alertService.success(`Album ${this.selectedAlbum.title} has been removed from favourites`);
    this.refresh()
  }

  public refresh() {
    this.printAlbums();
  }

  public onSelect(album: Album): void {
    this.selectedAlbum = album;
    this.isClicked = true;
  }

    ngOnInit() {
    this.printAlbums();
  }

}
