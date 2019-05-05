import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class GovEmpService {
    apiUrl = 'http://localhost:3001';

    constructor(private _http: HttpClient) { }

    checknic(nic) {
      return this._http.get( this.apiUrl + '/' + nic);
    }

  }