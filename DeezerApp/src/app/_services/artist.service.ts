import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Artist} from "../_models/artist";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private readonly ARTIST_URL: string = 'http://localhost:8080/artist'

  constructor(private http: HttpClient) { }

  public printArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.ARTIST_URL);
  }
}
