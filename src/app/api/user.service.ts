import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:3000/user';
  user: any[];

  constructor(private _http: HttpClient) { }

  signUp(user: User) {
    return this._http.post( this.apiUrl, user );
  }

  login(loginDetail: any) {
    return this._http.get<any>(this.apiUrl + '/' + loginDetail.email + '/' + loginDetail.password );
  }
}
