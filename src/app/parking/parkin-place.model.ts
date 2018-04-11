export class ParkingPlace {
    constructor(
        public id: number,
        public type: string,
        public offset: any = {
            top: null,
            left: null,
            position: null
        }
    ) {}
}