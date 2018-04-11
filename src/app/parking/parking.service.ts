import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable'

import {ParkingPlace} from './parkin-place.model'

export interface IParking {
    id: number,
    type: string,
    offset: {
        top: number,
        left: number,
        position: string
    }
}

@Injectable()
export class ParkingService {

    // Parking place count
    public totalCount: number;
    public disabledCount: number;
    public truckCount: number;

    // Available parking places
    public availableDisables: number;
    public availableSedans: number;
    public availableTruck: number;

    public placesAvailable: boolean = true;
    public fullPlaces: string = null;

    public parking: Observable<IParking[]>;
    private _parkingObservable: any;
    private _parking: IParking[] = [];

    constructor() {
        this.parking = new Observable(observer => this._parkingObservable = observer);
    }

    setData() {
        this._parking = [
            new ParkingPlace(1, 'disabled'),
            new ParkingPlace(2, 'disabled'),
            new ParkingPlace(3, 'disabled'),
            new ParkingPlace(4, 'disabled'),
            new ParkingPlace(5, 'disabled'),
            new ParkingPlace(6, 'disabled'),
            new ParkingPlace(7, 'disabled'),
            new ParkingPlace(8, 'disabled'),
            new ParkingPlace(9, 'sedan'),
            new ParkingPlace(10, 'sedan'),
            new ParkingPlace(11, 'sedan'),
            new ParkingPlace(12, 'sedan'),
            new ParkingPlace(13, 'sedan'),
            new ParkingPlace(14, 'sedan'),
            new ParkingPlace(15, 'sedan'),
            new ParkingPlace(16, 'sedan'),
            new ParkingPlace(17, 'truck'),
            new ParkingPlace(18, 'truck'),
            new ParkingPlace(19, 'truck'),
            new ParkingPlace(20, 'truck'),
        ];

        this.getParkingCount(this._parking);

        this._parkingObservable.next(this._parking);
    }

    generateParking1(total:number, disabled:number, truck:number ) {
        this._parking = [];
        this.fullPlaces = null;

        for (var i = 1, max = total; i <= max; i++) {
            this._parking.push( new ParkingPlace(i, 'sedan') );
        }
        if ( !!disabled ) {
            let disabledArr = this._parking.slice(0,disabled);
            disabledArr.forEach(function(place) {
                place['type'] = 'disabled'
            })
        }
        if ( !!truck ) {
            var truckArr = this._parking.slice(total - truck);
            truckArr.forEach(function(place) {
                place['type'] = 'truck'
            })
        }

        this.getParkingCount( this._parking );

        //console.log( this.placesAvailable, this.fullPlaces );
        //this._parkingObservable.next(this._parking);
    }

    // parkingCar( car ) {
    //     var parking = this._parking;

    //     for ( var place in parking ) {
    //         if ( parking[place].car === null ) {
    //             if ( parking[place].type === 'disabled' && car.type === 'Disabled') {

    //                 parking[place].car = car;
    //                 this.availableDisables -= 1;

    //                 break;
    //             }
    //             if ( parking[place].type === 'sedan' &&
    //                     (car.type === 'Disabled' || car.type === 'Sedan')) {

    //                 parking[place].car = car;
    //                 this.availableDisables -= 1;
    //                 this.availableSedans -= 1;

    //                 break;
    //             }
    //             if ( parking[place].type === 'truck' &&
    //                     (car.type === 'Truck' || car.type === 'Disabled' || car.type === 'Sedan')) {

    //                 parking[place].car = car;
    //                 this.availableDisables -= 1;
    //                 this.availableSedans -= 1;
    //                 this.availableTruck -= 1;

    //                 break;
    //             }
    //         }
    //     }

    //     if (!this.availableDisables && !this.availableSedans && !this.availableTruck) {
    //         this.fullPlaces = '';
    //     } else if ( !this.availableDisables && car.type === 'Disabled' ) {
    //         this.fullPlaces = car.type;
    //     } else if ( !this.availableSedans && car.type === 'Sedan' ) {
    //         this.fullPlaces = car.type;
    //     } else if ( !this.availableTruck && car.type === 'Truck' ) {
    //         this.fullPlaces = car.type;
    //     }

    //     console.dir( this._parking, '- Parking Collection' );
    //     console.log( 'Places left: ', 'Disabled -', this.availableDisables, 'Sedan -',this.availableSedans, 'Truck -', this.availableTruck);

    //     this._parkingObservable.next(this._parking);

    // }

    getParkingCount( attrs: any ) {
        this.totalCount = 0;
        this.disabledCount = 0;
        this.truckCount = 0;

        for ( var k in attrs ) {
            if ( attrs[k].hasOwnProperty('type') && attrs[k].type === 'disabled' ) {
                this.disabledCount += 1;
            }
            if ( attrs[k].hasOwnProperty('type') && attrs[k].type === 'truck' ) {
                this.truckCount += 1;
            }
        }
        this.totalCount = attrs.length;

        this.availableDisables = this.totalCount;
        this.availableSedans = this.totalCount - this.disabledCount;
        this.availableTruck = this.truckCount;
    }

    setOffsetPlace(viewPlaces) {
        var places = this._parking,
            offTop: number;
        for (var i = 0, max = viewPlaces.length; i < max; i++) {

            // For Chrome offsetTop
            offTop = ( viewPlaces[0].offsetTop === 285 ) ? viewPlaces[i].offsetTop - 28 : viewPlaces[i].offsetTop

            for ( var k in places ) {
                if ( viewPlaces[i].children[0] !== 'undefined' && parseInt( viewPlaces[i].children[0].textContent ) === places[k].id ) {
                    places[k].offset['left'] = viewPlaces[i].offsetLeft + (viewPlaces[i].offsetWidth / 2);
                    places[k].offset['top'] = offTop + (viewPlaces[i].offsetHeight / 2);

                    if ( places[i].id % 2 ) {
                        places[i].offset.position = 'left'
                    } else {
                        places[i].offset.position = 'right'
                    }
                    break;
                }
            }
        }
    }

    // findCarOnParking( car ) {
    //     var places = this._parking;
    //     for (var i in places) {
    //         if ( places[i].car !== null && places[i].car['id'] === car.id) {
    //             car.animation = places[i].offset;
    //         }
    //     }
    // }
}