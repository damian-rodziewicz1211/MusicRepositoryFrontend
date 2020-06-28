import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../_models/user";

let API_URL: string = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(`${API_URL}register`,user);
  }
}

