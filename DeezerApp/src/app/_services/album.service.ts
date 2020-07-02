import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album} from "../_models/album"
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private readonly ALBUM_URL: string = 'http://localhost:8080/album'

  constructor(private http: HttpClient) { }

  public printAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.ALBUM_URL);

  }

  public getAlbum(): Observable<Album> {
    return this.http.get<Album>(this.ALBUM_URL + '/116633');
  }
}
