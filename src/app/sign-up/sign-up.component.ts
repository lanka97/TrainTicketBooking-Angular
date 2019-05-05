import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { User } from '../../models/user';
import { UserService } from '../api/user.service';
import { from } from 'rxjs';
import { CookieService } from 'ngx-cookie';
import { DialogService } from '../support/confirmbox';
import { NgxCoolDialogsService } from 'ngx-cool-dialogs';
import { GovEmpService} from '../api/govEmp.service';
import { async } from '@angular/core/testing';

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
  nicError: boolean;

  constructor( private cookieService: CookieService,
               private userService: UserService,
               private dialogsercice: NgxCoolDialogsService,
               private govEmpService: GovEmpService ) {
    this.singUpError = false;
   }

  ngOnInit() {
  }

  clickSignUp() {
    this.validateNic();
    console.log(this.nicError);
    if ( this.user.govEmp ) {
      if( !this.nicError ) {
      this.userService.signUp(this.user).subscribe( res => {
        const response: any = res;
        if( response.message == 'Email Already exist' ){
            this.singUpError = true;
        } else if ( response.message == 'User Registerd' ){
          this.dialogsercice.alert( this.user.email + ' is Registerd' );
          this.cookieService.putObject('user', this.user );
          this.isSubmit.emit(true);
      }
      });
    }
    } else {
      console.log('run');
      this.user.nic = '';
      this.userService.signUp(this.user).subscribe( res => {
        const response: any = res;
        if( response.message == 'Email Already exist' ){
            this.singUpError = true;
        } else if ( response.message == 'User Registerd' ){
          this.dialogsercice.alert( this.user.email + ' is Registerd' );
          this.cookieService.putObject('user', this.user );
          this.isSubmit.emit(true);
      }
      });
    }

  }

  async validateNic() {
     await this.govEmpService.checknic( this.user.nic ).subscribe(  Res => {
      const res: any = Res;
      console.log(res);
      if ( res.message ==  'not govEmp' ) {
        this.nicError = true;
      } else {
        this.nicError = false;
      }
    });
  }

}
