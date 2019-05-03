import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { GalleriaModule } from 'primeng/galleria';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';

import { HomeCompComponent } from './home/home-comp/home-comp.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { CardModule } from 'primeng/components/card/card';
import { MatStepperModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { NgxCoolDialogsModule } from 'ngx-cool-dialogs';

import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import { CheckoutComponent } from './checkout/checkout.component';
import { DropdownModule } from 'primeng/dropdown';
import { CookieService, CookieModule } from 'ngx-cookie';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './api/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeCompComponent,
    LoginComponent,
    SignUpComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    NgxCoolDialogsModule.forRoot(),
    DropdownModule,
    RadioButtonModule,
    DialogModule,
    MatDialogModule,
    HttpClientModule,
    MatCheckboxModule,
    MatStepperModule,
    CardModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    ReactiveFormsModule,
    FormsModule,
    SidebarModule,
    GalleriaModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    CookieModule.forRoot(),
    CookieModule
  ],
  providers: [
    CookieService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
