import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Track} from "../_models/track";
import {Album} from "../_models/album";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly TRACK_URL: string = 'http://localhost:8080/search'
  private readonly ALBUM_URL: string = 'http://localhost:8080/search_albums'

  constructor(private http: HttpClient) { }

  public getTracks(query: string): Observable<Track[]>{

    return this.http.get<Track[]>(`${this.TRACK_URL}`,
      { params: new HttpParams().set(`q`, query)});
  }

  public getAlbums(query: string): Observable<Album[]>{

    return this.http.get<Album[]>( `${this.ALBUM_URL}`,
      { params: new HttpParams().set(`q`, query)});
  }

}
