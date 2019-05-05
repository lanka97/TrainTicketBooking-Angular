import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class PhoneService {
    phoneUrl = 'http://localhost:3003/phone';
    transectionsUrl = 'http://localhost:3003/transactions';

    constructor(private _http: HttpClient) { }

    checkPhone(phoneNumber: any, pin: number) {
      return this._http.get( this.phoneUrl + '/' + phoneNumber  + '/' + pin );
    }

    addTransaction( trans ) {
        return this._http.post(this.transectionsUrl, trans );
    }

    // getTickets() {
    //   return this._http.get<Ticket[]>(this.ticketUrl);
    // }

  }