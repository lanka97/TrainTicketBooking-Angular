import { Component, OnInit } from '@angular/core';
//import { ImageSupport } from '../../support/imagers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainService } from '../../api/trainServicers';
import { Train } from '../../../models/train';


@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.scss']
})
export class HomeCompComponent implements OnInit {

  trains: Train[];
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  display: boolean;
  selectedTrain: Train;

  constructor( private _formBuilder: FormBuilder, private trainService: TrainService ) { 

    this.trainService.getTrains().subscribe( res => {
      this.trains = res;
      console.log(this.trains);
    });

  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  async showDialogtoCheckout(item: any) {
    this.selectedTrain = item;
    if(this.selectedTrain){
    this.display = true;
  }
  }
  }


