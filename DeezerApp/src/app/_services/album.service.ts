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

  public addAlbum(albumId: number): Observable<string> {
    return this.http.post<string>(`${this.ALBUM_URL}`, {id: albumId});
  }

  public deleteAlbum( albumId: number): Observable<any> {

    return this.http.delete(`${this.ALBUM_URL}/` + albumId );
  }
}
