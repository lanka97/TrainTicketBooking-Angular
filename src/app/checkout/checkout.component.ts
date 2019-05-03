import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Train, Ticket } from '../../models/train';
import { User } from '../../models/user';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

 @Input() selectedTrain: Train;

  isLinear = false;
  train: Train[];
  userFormGroup: FormGroup;
  ticketFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  showLogin: boolean;
  showSignUp: boolean;
  mobile: boolean;
  card: boolean;
  fName = "Name"; 
  payOptions: SelectItem[];
  classes: SelectItem[];
  times: SelectItem[];
  paymemtOption: string;
  ticket: Ticket;
  user: User;

  constructor( private _formBuilder: FormBuilder ) {
    this.payOptions = [
      {label: 'Payment Methord', value: null},
      {label: 'Card', value : 'card'},
      {label: 'Mobile', value: 'mobile'}
    ];
  }

  ngOnInit() {

    this.getTimes();
    this.grtClassPricers();

    this.user = null;

    this.userFormGroup = this._formBuilder.group({
      fName : new FormControl(''|| null, [ Validators.required ]),
      // 'lName': new FormControl(this.user.lName || null, [ Validators.required ]),
      // 'email': new FormControl(this.user.email || null, [ Validators.required ]),
      // 'phone': new FormControl(this.user.phone || null, [ Validators.required ]),
      // 'govEmp': new FormControl(this.user.govEmp || null, [  ]),
      // 'nic': new FormControl(this.user.nic, [ ]),
    });

    this.ticketFormGroup = this._formBuilder.group({
      // 'fName': new FormControl(this.user.fName || null, [ Validators.required ]),
      // 'lName': new FormControl(this.user.lName || null, [ Validators.required ]),
      // 'email': new FormControl(this.user.email || null, [ Validators.required ]),
      // 'phone': new FormControl(this.user.phone || null, [ Validators.required ]),
      // 'govEmp': new FormControl(this.user.govEmp || null, [  ]),
      // 'nic': new FormControl(this.user.nic || null, [ ]),
    });
  }

  getTimes(){
    this.times = [{label: 'Train Time', value: null}];
    this.selectedTrain.time.forEach( time =>{
      this.times.push({label: time , value: time });
    });
  }

  grtClassPricers() {
    this.classes = [
      {label: 'Ticket Class', value: null},
      {label: '1st Class ' + this.selectedTrain.price[0], value : this.selectedTrain.price[0]},
      {label: '2nd Class ' + this.selectedTrain.price[1], value : this.selectedTrain.price[1]},
      {label: '3rd Class ' + this.selectedTrain.price[2], value : this.selectedTrain.price[2]}
    ];
  }

  submitTicket(){

  }

}
