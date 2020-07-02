import { Component, OnInit } from '@angular/core';
import {Artist} from "../../_models/artist";
import {ArtistService} from "../../_services/artist.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public artists: Artist[];
  public selectedArtist: Artist;

  constructor(
    private artistService: ArtistService
  ) { }

  public printArtists() {
    return this.artistService.printArtists()
      .subscribe(artists => this.artists = artists);
  }

  ngOnInit() {
    this.printArtists();
  }

}
