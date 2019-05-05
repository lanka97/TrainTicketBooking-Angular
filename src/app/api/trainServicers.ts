import { Train } from '../../models/train';
import { Injectable } from '@angular/core';
import { Ticket } from '../../models/train';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class TrainService {
    trainUrl = 'http://localhost:3000/train';
    ticketUrl = 'http://localhost:3000/ticket';
    user: any[];

    constructor(private _http: HttpClient) { }

    getTrains() {
      return this._http.get<Train[]>(this.trainUrl);
    }

    getTickets() {
      return this._http.get<Ticket[]>(this.ticketUrl);
    }

    setTicket( ticket ) {
      return this._http.post(this.ticketUrl, ticket );
    }
  }
