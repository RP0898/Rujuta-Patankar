import { Injectable} from '@angular/core';
import { Car }  from './car';

@Injectable({
  providedIn: 'root'
})

export class TransportationService {

  suburu: Car = {make: 'Suburu', model: 'Outback', miles: 58232 };

  cars:Car[] = [this.suburu];

  constructor() {}

  getCars() {
    return this.cars;
  }
    addCar(car: Car)
    { this.cars.push(car);}

  }
