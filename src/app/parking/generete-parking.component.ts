import {Component, OnInit, OnChanges} from '@angular/core';
// import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';

import {ParkingService} from './parking.service';

@Component({
    selector: 'generate-parking',
    templateUrl:'generate-parking.html'
    
})

export class GenerateParking {
total:number;
truck:number;
disabled:number;

    private pSedan: number;
    private pDisabled: number;
    private pTruck: number;

    private aSedan: number;
    private aDisabled: number;
    private aTruck: number;

    //public parkingForm: FormGroup;

    constructor(private _parkingService: ParkingService) {

        // this.parkingForm = this._fb.group({
        //     total: new FormControl('10', Validators.required),
        //     disabled: new FormControl(''),
        //     truck: new FormControl('')
        // }, {validator: this.validateInputPlaces});
    }

    onCreateParking() {
        this._parkingService.generateParking1(this.total, this.disabled, this.truck);

        this.pSedan = this.total - this.disabled;
        this.pDisabled = this.disabled;
        this.pTruck = this.truck;

        this.aSedan = this._parkingService.availableSedans;
        this.aDisabled = this._parkingService.availableDisables;
        this.aTruck = this._parkingService.availableTruck;
    }

    // validateInputPlaces(group: FormGroup) {
    //     var total = group.controls['total'].value || 0,
    //         disabled = group.controls['disabled'].value || 0,
    //         truck = group.controls['truck'].value || 0,

    //         valid = true;

    //     if ( total < (disabled + truck) || disabled < 0 || truck < 0 ) {
    //         valid = false;
    //     }
    //     if ( valid ) {
    //         return null;
    //     }

    //     return {
    //         validateInputPlaces: true
    //     };
    // }
}