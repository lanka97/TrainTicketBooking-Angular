import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, Form } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Train, Ticket } from '../../models/train';
import { User } from '../../models/user';
import { CookieService } from 'ngx-cookie';
import { from } from 'rxjs';
import { CreditCardValidator } from 'angular-cc-library';
import { CardService } from '../api/card.service';
import { NgxCoolDialogsService } from 'ngx-cool-dialogs';
import { TrainService } from '../api/trainServicers';
import { PhoneService } from '../api/phone.service';
import { GovEmpService } from '../api/govEmp.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  @Input() selectedTrain: Train;
  @Output() isSubmit = new EventEmitter<boolean>();

  isLinear = false;
  train: Train[];
  userFormGroup: FormGroup;
  ticketFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  form: FormGroup;
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
  selectedClass: any;
  cardNum: number;
  cvc: number;
  exp: string;
  cardError: boolean;
  phoneError: boolean;
  phone: any;
  pin: any;

  constructor(private _formBuilder: FormBuilder,
    private cookieService: CookieService,
    private cardService: CardService,
    private phoneService: PhoneService,
    private dialogsercice: NgxCoolDialogsService,
    private trainService: TrainService) {
    this.payOptions = [
      { label: 'Payment Methord', value: null },
      { label: 'Card', value: 'card' },
      { label: 'Mobile', value: 'mobile' }
    ];

    this.ticket = {};
  }

  ngOnInit() {

    this.getTimes();
    this.grtClassPricers();

    this.user = this.initalizeUser() || {};

    this.form = this._formBuilder.group({
      creditCard: ['', [<any>CreditCardValidator.validateCCNumber]],
      expirationDate: ['', [<any>CreditCardValidator.validateExpDate]],
      cvc: ['', [<any>Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(4)]]
    });

    this.userFormGroup = this._formBuilder.group({
      fName: new FormControl('' || null, [Validators.required]),
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

  getTimes() {
    this.times = [{ label: 'Train Time', value: null }];
    this.selectedTrain.time.forEach(time => {
      this.times.push({ label: time, value: time });
    });
  }

  grtClassPricers() {
    this.classes = [
      { label: 'Ticket Class', value: null },
      { label: '1st Class ' + this.selectedTrain.price[0], value: this.selectedTrain.price[0] },
      { label: '2nd Class ' + this.selectedTrain.price[1], value: this.selectedTrain.price[1] },
      { label: '3rd Class ' + this.selectedTrain.price[2], value: this.selectedTrain.price[2] }
    ];

  }

  submitTicket() {

  }

  initalizeUser() {
    const user: User = this.cookieService.getObject('user');
    // if ( user.email ) {
    //   this.ticket.passengerName = user.fName + ' ' + user.lName;
    //   this.ticket.passengerEmail = user.email;
    //   this.ticket.passengerPhone = user.phone;
    // }
    return user;
  }

  submitUser() {
    this.ticket.passengerName = this.user.fName + ' ' + this.user.lName;
    this.ticket.passengerEmail = this.user.email;
    this.ticket.passengerPhone = this.user.phone;
  }

  submitTrain() {
    if (this.user.govEmp) {
      this.ticket.price = this.selectedClass * this.ticket.count * 90 / 100;
    } else {
      this.ticket.price = this.selectedClass * this.ticket.count;
    }

    this.ticket.trainName = this.selectedTrain.trainName + ' ' +
      this.selectedTrain.departure + ' to ' +
      this.selectedTrain.destination;

    this.ticket.class = this.selectedClass;
  }

  onCardSubmit(form) {
    this.cardService.checkCard(this.cardNum, this.cvc).subscribe(response => {
      const res: any = response;

      if (!res.success) {
        this.cardError = true;
        return 0;
      }

      const transaction = {
        cardNum: this.cardNum,
        date: new Date(),
        amount: this.ticket.price
      }

      this.cardService.addTransaction(transaction).subscribe(tResponse => {
        const tRes: any = tResponse;
        if (tRes.message == 'Transaction Registerd') {
          this.trainService.setTicket(this.ticket).subscribe(ticketResponse => {
            const ticketRes: any = ticketResponse;
            if (ticketRes.message == 'success') {
              this.dialogsercice.alert('Transaction Completed');
              this.isSubmit.emit(true);
            }
          });
        }
      });

    })
  }

  onPhoneSubmit() {
    this.phoneService.checkPhone(this.phone, this.pin).subscribe(Response => {
      const res: any = Response;
      const transaction = {
        number: this.phone,
        date: new Date(),
        amount: this.ticket.price
      }

      if (res.success) {
        this.phoneService.addTransaction(transaction).subscribe(tResponse => {
          const tRes: any = tResponse;
          if (tRes.message == 'Transaction Registerd') {
            this.trainService.setTicket(this.ticket).subscribe(ticketResponse => {
              const ticketRes: any = ticketResponse;
              if (ticketRes.message == 'success') {
                this.dialogsercice.alert('Transaction Completed');
                this.isSubmit.emit(true);
              }
            });
          }
        });
      } else {
        this.phoneError = true;
      }
    });
  }



}
