import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  showLogin: boolean;
  showSignUp: boolean;
  mobile: boolean;
  card: boolean;
  fName = "NAme"; 
  payOptions: SelectItem[];
  paymemtOption: string;

  constructor( private _formBuilder: FormBuilder ) { 
    this.payOptions = [
      {label: 'Select City', value: null},
      {label: 'Card', value : 'card'},
      {label: 'Mobile', value: 'mobile'}
    ];
  }

  ngOnInit() {

    this.secondFormGroup = this._formBuilder.group({
      count: ['', Validators.required]
    });

    this.firstFormGroup = this._formBuilder.group({
      'fName': new FormControl(this.fName, [
         Validators.required,
      ])
    });
  }

}
