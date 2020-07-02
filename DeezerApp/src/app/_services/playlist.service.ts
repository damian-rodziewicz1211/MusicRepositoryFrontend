import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Playlist} from "../_models/playlist";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private readonly PLAYLIST_URL: string = 'http://localhost:8080/playlist';

  constructor(private http: HttpClient) { }

  public printPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.PLAYLIST_URL);
  }
}
