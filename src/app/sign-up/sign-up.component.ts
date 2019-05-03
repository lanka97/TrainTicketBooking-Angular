import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { User } from '../../models/user';
import { UserService } from '../api/user.service';
import { from } from 'rxjs';
import { DialogService } from '../support/confirmbox';
import { NgxCoolDialogsService } from 'ngx-cool-dialogs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  govEmp: boolean;
  user: User = {};
  @Output() isSubmit = new EventEmitter<boolean>();
  singUpError: boolean;

  constructor(private userService: UserService, private dialogsercice: NgxCoolDialogsService ) {
    this.singUpError = false;
   }

  ngOnInit() {
  }

  clickSignUp() {
    if ( this.user.govEmp ) {
      this.userService.signUp(this.user).subscribe( res => {
        console.log(res);
      });
    } else {
      console.log('run');
      this.user.nic = '';
      this.userService.signUp(this.user).subscribe( res => {
        const response: any = res;
        if( response.message == 'Email Already exist' ){
            this.singUpError = true;
        }
        if( response.message == 'User Registerd' ){
          this.dialogsercice.alert( this.user.email + ' is Registerd' );
          this.isSubmit.emit(true);
      }
      });
    }

  }

}
