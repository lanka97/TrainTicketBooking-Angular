import { Component, OnInit, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { BoundPlayerFactory } from '@angular/core/src/render3/styling/player_factory';
import { UserService } from './api/user.service';
import { from } from 'rxjs';
import { TrainService } from './api/trainServicers'
// import { ImageSupport } from './support/imagers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CookieService]
})

@Injectable()
export class AppComponent implements OnInit {
  title = 'Trains.lk';

  showLogin: boolean;
  showSignUp: any;
  images: any[];
  user = this.cookieService.getObject("user");

  constructor(private cookieService: CookieService, private userService: UserService, private trainService: TrainService) {
    this.checkLogin();
    this.showLogin = false;
    this.images = [];
    this.images.push({ source: '../../assets/img/1.jpg', alt: 'Udarata Manike', title: 'Up-country Rail Way' });
    this.images.push({ source: '../../assets/img/2 (1).jfif', alt: 'Ruhunu Kumari', title: 'Sea Road' });
    this.images.push({ source: '../../assets/img/1 (4).jpg', alt: 'Podi Manike', title: 'Nine Archs' });
  }

  ngOnInit() {
    this.checkLogin();
  }

  closeLogin(event: any) {
    this.showLogin = false;
    this.checkLogin();
  }

  closeSignUp(event: any) {
    this.showSignUp = false;
  }

  closeLoginOpenSignUp(event: any) {
    this.showLogin = false;
    this.showSignUp = true;
  }

  checkLogin(): boolean {
    this.user = this.cookieService.getObject('user');

    if (this.user) {
      return true;
    } else {
      return false;
    }

  }

  logOut() {
    this.cookieService.remove("user");
  }

}
