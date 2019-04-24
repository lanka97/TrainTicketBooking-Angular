import { Component, OnInit } from '@angular/core';
// import { ImageSupport } from './support/imagers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Trains.lk';

  showLogin: boolean;
  showSignUp: any;
  images: any[];

  constructor( ){
    this.showLogin = false;
    this.images = [];
    this.images.push({source: '../../assets/img/1.jpg', alt: 'Udarata Manike', title: 'Up-country Rail Way'});
    this.images.push({source: '../../assets/img/2 (1).jfif', alt: 'Ruhunu Kumari', title: 'Sea Road'});
    this.images.push({source: '../../assets/img/1 (4).jpg', alt: 'Podi Manike', title: 'Nine Archs'});
  }

}
