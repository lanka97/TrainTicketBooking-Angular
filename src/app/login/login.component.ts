import { Component, OnInit, EventEmitter, Output, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { UserService } from '../api/user.service';
import { User } from 'src/models/user';
import { NgxCoolDialogsService } from 'ngx-cool-dialogs';

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
  errorMsg = '';

  constructor( private cookieService: CookieService,
               private userService: UserService,
               private dialogsercice: NgxCoolDialogsService) { }

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

    this.userService.login(loginObj).subscribe( response => {
      console.log(response);
      if ( response.success ) {
        this.cookieService.putObject('user', response.user );
        this.isSubmit.emit(true);
        this.dialogsercice.alert( 'loged in ' + response.user.email );
      } else {
        this.errorMsg = response.error;
        console.log(this.errorMsg);
      }
    });

  }

  clickClose() {
    this.isSubmit.emit(true);
  }
}
