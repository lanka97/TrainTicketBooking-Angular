import { Component, OnInit, EventEmitter, Output, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { UserService } from '../api/user.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ CookieService ]
})

@Injectable()
export class LoginComponent implements OnInit {

  @Output() isSubmit = new EventEmitter<boolean>();
  @Output() isSignUp = new EventEmitter<boolean>();

  email = '';
  password = '';

  constructor( private cookieService: CookieService, private userService: UserService ) { }

  ngOnInit() {
  }

  clickSignUp() {
    this.isSignUp.emit(true);
  }

  clickLogin() {
    const loginObj = {
      email: this.email,
      password: this.password
    };

    this.userService.login(loginObj).subscribe( respose => {
      console.log(respose);
    });
    this.isSubmit.emit(true);
    this.cookieService.putObject("name","Cookie Wada");
  }

  clickClose() {
    this.isSubmit.emit(true);
  }
}
