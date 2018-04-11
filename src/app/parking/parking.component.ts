import {Component, Pipe, PipeTransform, DoCheck, IterableDiffers} from '@angular/core';

import {ParkingService} from './parking.service';

@Pipe({
    name: 'placePipe'
})
export class ParkingPlacePipe implements PipeTransform{
    transform( value:any, args ) {
        if ( args[0] === 'left' ) {
            return value.filter((item)=> item.id % 2);
        }
        if ( args[0] === 'right' ) {
            return value.filter((item)=> item.id % 2 == 0);
        }
    }
}

@Component({
    selector: 'parking',
    template: `
        <div class="parking-left">
            <div *ngFor="let place of parkingPlaces | placePipe:'left'" class="parking-place" (change)="test1()"><span>{{place.id}} - <span class="place-type">{{place.type}}</span></span></div>
        </div>
        <div class="parking-right">
            <div *ngFor="let place of parkingPlaces | placePipe:'right'" class="parking-place"><span>{{place.id}} - <span class="place-type">{{place.type}}</span></span></div>
        </div>
    `
})
export class Parking implements DoCheck {

    private parkingPlaces = [];
    private differ: any;

    constructor( private _parkingService: ParkingService, differs: IterableDiffers ) {
        _parkingService.parking.subscribe(newParking => this.parkingPlaces = newParking);

        this.differ = differs.find([]).create(null);

        this._parkingService.setData();
    }

    ngDoCheck() {
        var changes = this.differ.diff(this.parkingPlaces),
            that = this;

        if ( changes !== null ) {

            setTimeout(function(){
                var viewPlaces = document.querySelectorAll('.parking-place');
                that._parkingService.setOffsetPlace( viewPlaces );
            }, 100);

        }
    }
}