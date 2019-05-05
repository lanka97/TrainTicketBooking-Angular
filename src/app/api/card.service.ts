
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class CardService {
    cardUrl = 'http://localhost:3002/card';
    transectionsUrl = 'http://localhost:3002/transactions';
    user: any[];

    constructor(private _http: HttpClient) { }

    checkCard(cardNumber: number, cvc: number) {
        console.log(cardNumber);
      return this._http.get( this.cardUrl + '/' + cvc  + '/' + cardNumber );
    }

    addTransaction( trans ) {
        return this._http.post(this.transectionsUrl, trans );
    }

    // getTickets() {
    //   return this._http.get<Ticket[]>(this.ticketUrl);
    // }

  }