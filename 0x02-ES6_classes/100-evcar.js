// Car.js

class Car {
    constructor(brand, motor, color) {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    // Getter for brand
    get brand() {
      return this._brand;
    }
  
    // Getter for motor
    get motor() {
      return this._motor;
    }
  
    // Getter for color
    get color() {
      return this._color;
    }
  
    // Method to clone the car
    cloneCar() {
      // Create a new instance of the class with the same attributes
      return new Car(this._brand, this._motor, this._color);
    }
  }
  
  export default Car;
  