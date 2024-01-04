/* eslint-disable new-cap */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const obj = super.constructor[Symbol.species] || Car;
    const clone = new obj();
    return clone;
  }
}
