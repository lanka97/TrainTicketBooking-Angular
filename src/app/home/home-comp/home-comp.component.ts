import { Component, OnInit } from '@angular/core';
//import { ImageSupport } from '../../support/imagers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.scss']
})
export class HomeCompComponent implements OnInit {

  imagers : any[];
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  display:boolean;

  constructor( private _formBuilder: FormBuilder ) { 
    this.imagers = [];
    this.imagers.push(1);
    this.imagers.push(1);
    this.imagers.push(1);
    this.imagers.push(1);
    this.imagers.push(1);
    this.imagers.push(1);
    this.imagers.push(1);
    this.imagers.push(1);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  }


